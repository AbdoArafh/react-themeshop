import ReactIcon from '../../components/icons/reactIcon';
import { Eye, MessageSquare } from "react-feather";
import Products from '../../components/products';
import { Link } from 'react-router-dom'
import Orbits from './orbits';

function BrowseButton({additionalClassNames=""}) {
    return (
        <Link to="/all-products" className={"bg-orange-700 max-w-fit text-white py-3 px-12 rounded-lg hover:brightness-110 active:brightness-75 sm:mx-auto" + " " + additionalClassNames}>
            Browse
        </Link>
    )
}

function Feature({title, description, Icon, blobColor}) {
    return (
        <div className="feature group pt-10 pb-14 border-b-4 border-b-transparent hover:border-orange-600 cursor-pointer relative after:block after:w-5 after:h-[2px] after:bg-gray-500 after:absolute after:bottom-5">
            {title.split("<br>").map(
                (t, i) => (
                    <h1
                        key={i.toString()}
                        className="title text-2xl group-hover:text-orange-600 last-of-type:mb-5"
                    >
                        {t}
                    </h1>
                )
            )}
            {
                description.split("<br>").map(
                    (d, i) => (
                        <p key={i.toString()} className="description text-sm last-of-type:mb-5">
                            {d}    
                        </p>
                    )
                )
            }
            <div className="relative">
                <div className={`blob ${blobColor} w-10 aspect-square absolute -top-3 left-0 rounded-full`}></div>
                {typeof Icon === "string"
                    ? <img src={Icon} alt={title} />
                    : <Icon className="scale-300 ml-6 mt-10" />
                }
            </div>
        </div>
    )
}

function WhyUs() {
    return (
        <section className="why-us my-10 mx-auto">
            <div className="text-center">
                <h1 className="font-medium text-4xl mb-5">
                    Why Choose Tortoiz Themes
                </h1>
                <p>
                    Our strategy includes consistently evolving, to ensure that we are producing
                </p>
                <p>
                    exceptional SEO for businesses.
                </p>
            </div>
            <div className="features grid lg:grid-cols-4 sm:grid-cols-2 justify-center gap-10 px-5 mt-10">
                <Feature
                    title="Competitor <br> Research"
                    description="Help business with their brading <br> identity better"
                    Icon={ReactIcon}
                    blobColor="bg-red-400"
                />
                <Feature
                    title="Competitor <br> Research"
                    description="Help business with their brading <br> identity better"
                    Icon={ReactIcon}
                    blobColor="bg-red-400"
                />
                <Feature
                    title="Competitor <br> Research"
                    description="Help business with their brading <br> identity better"
                    Icon={ReactIcon}
                    blobColor="bg-red-400"
                />
                <Feature
                    title="Competitor <br> Research"
                    description="Help business with their brading <br> identity better"
                    Icon={ReactIcon}
                    blobColor="bg-red-400"
                />
            </div>
        </section>
    )
}

function SeperatedHeaderTitle({titles}) {
    return (
        titles.split(" <br> ").map(
            (title, i) => (
                <h1 key={i.toString()} className="title text-5xl -my-5 font-medium">
                    {title}
                </h1>
            )
        )
    )
}

function LatestProducts({products}) {
    return (
        <section className="mt-20 latest-products flex flex-col gap-14">
            <h1 className="title text-3xl font-medium text-center">
                Our Latest Products
            </h1>
            {/* TODO sort by date and get only certain amount */}
            <Products products={products} />
            <BrowseButton additionalClassNames="mt-6" />
        </section>
    )
}

function JobTitle({position, company}) {
    return (
        <div className="job-title">
            <span className="position text-gray-500">{position}</span>
            {" "}
            <span className="company text-orange-500">{company}</span>
       </div>
    )
}

function Rate() {
    return (
        <div className="rate flex flex-col gap-10 snap-start">
            <div className="review">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, maiores! "
            </div>
            <div className="person flex flex-row h-16 gap-5">
                <img src="https://via.placeholder.com/100" alt="person's profile picture" className="rounded-full" />
                <div className="info my-auto">
                    <div className="name font-medium">
                        John Doe
                    </div>
                    <JobTitle position="Director At" company="Company"/>
                </div>
            </div>
        </div>
    )
}

function ArticleComponent() {
    return (
        <a href="#" className="article group flex flex-col gap-5">
            <img src="https://via.placeholder.com/300.png" alt="article image" />
            <div className="info1 uppercase text-gray-500 flex flex-row items-center gap-3 text-sm">
                <span className="tag">
                    tips
                </span>
                <span className="sep w-1 aspect-square bg-gray-500 rounded-full"></span>
                <span className="date">
                    Feb 12, 2022
                </span>
            </div>
            <div className="title font-semibold text-2xl group-hover:text-orange-500 transition-color">
                How To optimize cost for GG Ads?
            </div>
            <div className="info2 flex flex-row gap-5 text-gray-500">
                <div className="comments ">
                    <MessageSquare className="inline-block mr-1" /> 25
                </div>
                <div className="views">
                    <Eye className="inline-block mx-1" /> 32,6K
                </div>
            </div>
        </a>
    )
}

function LatestArticles() {
    return (
        <section className="latest-articles">
            <h1 className="title text-4xl font-medium text-center mb-14">
                Latest Articles
            </h1>
            <div className="articles grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
            </div>
        </section>
    )
}

export default function Themes({products}) {
    return (
        <div className="container relative mx-auto mt-14">
            <section className="header mt-20 mx-1 pb-20 grid grid-rows-2 gap-[100px] lg:gird-rows-1 lg:gap-0 lg:grid-cols-2 lg:mx-0 lg:pb-0">
                <div className="text flex flex-col gap-10 text-center lg:text-left sm:text-center">
                    <SeperatedHeaderTitle titles="Exquisitly <br> designed themes <br> for your next project" />
                    <div className="details flex flex-col">
                        <p>
                            Our products are hand crafted for production
                        </p>
                        <p>
                            & can get you up and running in minutes
                        </p>
                    </div>
                    <BrowseButton additionalClassNames="mx-auto lg:ml-0" />
                </div>
                <Orbits />
            </section>
            <WhyUs />
            <LatestProducts products={products} />
            <section className="why-the-love my-20"> 
                <h1 className="title text-center text-4xl font-medium">
                    Why Clients Love Us
                </h1>
                <div className="description text-center my-6">
                    <p>
                        Our strategy includes consistently evolving, to ensure that we are producing
                    </p>
                    <p>
                        exceptional SEO for businesses.
                    </p>
                </div>
                <div className="rates mt-20 overflow-scroll h-52 flex flex-col gap-20 snap-y snap-mandatory">
                    <div className="snap-start grid lg:grid-cols-2"><Rate />
                    <Rate /></div>
                    <div className="snap-start grid grid-cols-2"><Rate />
                    <Rate /></div>
                    <div className="snap-start grid grid-cols-2"><Rate />
                    <Rate /></div>
                </div>
            </section>
            <section className="collab my-20">
                <marquee behavior="scroll" direction="left" scrolldelay="60">
                    {Array.from(Array(8)).map(
                        (_, i) => <img key={i.toString()} src="https://via.placeholder.com/500x100" alt="a company logo" className="inline-block mx-10" />
                    )}
                </marquee>
            </section>
            <LatestArticles />
            <div className="subscription my-20 py-20 bg-[#003146] text-center text-white">
                <div className="title text-3xl font-semibold text-orange-700 mb-2">
                    Unlimited Access Pass
                </div>
                <div className="description text-sm">
                    <div>
                        Yearly access to all products with a huge discount
                    </div>
                    <div>
                        Grab all current products and all updates for one year
                    </div>
                </div>
                <div className="price mt-10 mb-20 text-5xl font-bold bg-orange-600 w-fit p-5 mx-auto">
                    $99<sup>/yr</sup>
                </div>
                <a href="#" className="subscribe text-black mx-auto py-3 px-20 bg-[#5DA92F] text-2xl font-medium rounded-xl uppercase hover:brightness-110">
                    subscribe
                </a>
                <div className="notice mt-8">
                    The standard VAT rate may be charged, following the law of your country
                </div>
            </div>
        </div>
    )
}
