import { AlertTriangle, ThumbsUp, ArrowDown } from 'react-feather';
import { useParams } from 'react-router-dom'
import Error404 from '../../components/404';
import StarRating from '../../components/starRating';
import React, { useState } from 'react'

function VersionInfoPiece({Key, value, last}) {
    return (
        <>
            <span>
                <span className="font-bold mr-2">
                    {Key}:
                </span>
                <span className="text-gray-500">
                    {value}
                </span>
            </span>
            {last || <span className="mx-2 text-gray-500">|</span>}
        </>
    )
}

function ProductPath({path, additionalClassName}) {
    return (
        <div className={"path text-gray-500 " + additionalClassName}>
            {path.at(-1).replace("/", " ").trim().split(" ").join("/").concat("/")}
        </div>)

}

function CollapsableText({children}) {
    if (typeof children !== "string") return null;
    const maxLength = 300;
    const collapsable = children.length > maxLength;
    const [collapsed, setCollapsed] = useState(collapsable);

    function toggle() {
        setCollapsed(c => !c);
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="text">
                {collapsed
                ? (children.slice(0, maxLength) + " " + (maxLength < children.length && "..."))
                : children}
            </div>
            {collapsable && <button onClick={toggle} className="flex flex-row gap-2 justify-center items-center mx-auto">
                {collapsed
                ? "Read More"
                : "Read Less"}
                <ArrowDown className={!collapsed ? "rotate-[180deg]" : ""} />
            </button>}
        </div>
    )
}

function DetailsComponent({details}) {
    // todo make it so it will be more flexable and work with only one element of the data
    return (
        <div className="product-details flex flex-col gap-10">
            {details.map(
                (detail, i) => (
                    // todo delete this -----> <div key={i.toString()} className={`grid ${detail.src ? "grid-cols-2" : "grid-cols-1"} gap-4`}>
                    <div key={i.toString()} className={`flex gap-5 ${i & 1 ? "flex-row" : "flex-row-reverse"}`}>
                        {detail.src && <img src={detail.src} alt={detail.title} className="mx-auto" />}
                        <div className="text flex flex-col gap-5">
                            {detail.title && <h1 className="text-3xl">
                                {detail.title}
                            </h1>}
                            <CollapsableText>
                                {detail.p}
                            </CollapsableText>
                            {detail.points && <ul className="list-disc ml-4">
                                {detail.points.map(
                                    (point, i) => (
                                        <li key={i.toString()}>
                                            {point}
                                        </li>
                                    )
                                )}    
                            </ul>}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

function ReviewsComponent({reviews}) {
    return (
        <div className="reviews flex flex-col gap-8">
            {reviews.map(
                (review, i) => (
                    <div key={i.toString()} className="review ml-2">
                        <div className="person flex flex-row gap-5 h-10 relative items-center">
                            <img className="rounded-full h-[100%] aspect-square object-center" src={review.profilePicture} alt={review.name} />
                            <div className="name">{review.name}</div>
                        </div>
                        <div className="review-body">
                            <StarRating rating={review.rating} className="my-4" />
                            <div className="comment">
                                {review.comment}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

function TagsComponent({tags}) {
    return (
        <div className="tags flex flex-row gap-5">
            {tags.map(
                tag => (
                    // add in the all products ways to search12
                    <a href="#" className="tag py-1 px-3 bg-gray-300 rounded-lg hover:brightness-110">
                        {tag}
                    </a>
                )
            )}
        </div>
    )
}

function FAQsComponent({faqs}) {
    return (
        <div className="faqs">
            {faqs.map(
                faq => (
                    <div className="faq mb-10">
                        <div className="question text-2xl font-semibold mb-4">
                            {faq.question}
                        </div>
                        <div className="answer">
                            {faq.answer}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
export default function ProductDetails({products}) {
    const { id } = useParams();
    const product = products.find(
        el => el.id === id
    );
    if (!product) return <Error404 error={`404 Product not found <br> No product with id "${id}"`} />
    // calculated average of the reviews
    const avgRating = product.reviews.reduce((a, b) => a + b.rating, 0) / product.reviews.length;
    
    
    const detailsComponents = {
        details: DetailsComponent,
        reviews: ReviewsComponent,
        tags: TagsComponent,
        faqs: FAQsComponent
    }

    
    const detailsFilters = Object.keys(detailsComponents);
    const [chosenFilter, setChosenFilter] = useState(detailsFilters[0]);

    function handleFilter(event) {
        // code repeated to not make a variable and waste memory and time
        if (event.target.dataset.filter) {
            setChosenFilter(event.target.dataset.filter);
        }
    }


    // return <div>{JSON.stringify(product, null, "")}</div>

    return (
        <div className="container mx-auto product-details my-20">
            <section className="overview grid grid-cols-2 sm:mx-2">
                <img src={product.thumbnail} alt={product.name} className="rounded-lg" />
                <div className="info flex flex-col gap-8">
                    {/* todo make a dynamic path */}
                    <ProductPath path={product.path} />
                    <div className="name text-4xl font-semibold">{product.name}</div>
                    <div className="reviews-overview flex flex-row gap-3 text-gray-500 items-baseline">
                        <StarRating rating={avgRating} className="text-black" />
                        <span>|</span>
                        <div className="reviews-count">
                            {product.reviews.length} reviews
                        </div>
                        <span>|</span>
                        <a href="#" className="hover:text-black">Add your rating</a>
                    </div>
                    <div className="description">
                        {product.description}
                    </div>
                    <ul className="features ml-5">
                        {product.features.map(
                            (feature, i) => (
                                <li key={i.toString()} className="feature relative before:inline-block before:w-2 before:aspect-square before:bg-black before:mr-3 before:mb-[2px]">
                                    {feature}
                                </li>
                            )
                        )}
                    </ul>
                    <a href="#" className="order text-center text-white font-medium text-xl bg-orange-600 py-5 mx-4 rounded-xl">
                        {product.price.toLowerCase() === "free"
                            ? "Download For Free"
                            : "Purchase Now"
                        }
                    </a>
                    <div className="disclaimers text-gray-500">
                        <div className="ok flex flex-row gap-2 mb-6">
                            <ThumbsUp />
                            <div>
                                You can use it for personal and commercial projects
                            </div>
                        </div>
                        <div className="warning flex flex-row gap-2">
                            <div><AlertTriangle /></div>
                            <div className="div">
                                You can not redistribute it, resell it, sub-license
                                or offer our files to any third party.
                                Please, give a link to us instead of uploading files to your server
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="details my-10">
                <ProductPath path={product.path} additionalClassName="uppercase tracking-wide text-sm"/>
                <div className="title flex flex-row gap-8 my-5">
                    <h1 className="text-5xl font-bold uppercase">
                        {product.path.at(-1).split("/").at(-1)}
                    </h1>
                    <a href="#" target="_blank" className="flex items-center px-2 text-white text-lg font-medium bg-orange-500 rounded-xl hover:brightness-125">
                        View Demo    
                    </a>
                </div>
                <div className="version-info">
                    <VersionInfoPiece Key="Current Version" value={product.version} />
                    <VersionInfoPiece Key="Last Update" value={product.lastUpdate} />
                    <VersionInfoPiece Key="Compatiblity" value={product.compatibility.join(" ")} last />
                </div>
                <main className="my-10">
                    <div className="filters flex flex-row gap-8 uppercase text-gray-500 mb-10">
                        {detailsFilters.map(
                            (filter, i, arr) => (
                                <div key={i.toString()} className="select-none">
                                    <span
                                        className={`${filter === chosenFilter ? "text-black ": ""}font-semibold cursor-pointer hover:text-black transition-all`}
                                        data-filter={filter}
                                        onClick={e => handleFilter(e)}
                                    >
                                        {filter}
                                    </span>
                                    {i < arr.length - 1 ? <span className="ml-5">|</span> : null}
                                </div>
                            )
                        )}
                    </div>
                    {React.createElement(detailsComponents[chosenFilter], {[chosenFilter]: product[chosenFilter]}, null)}
                </main>
            </section>
        </div>
    )
}
