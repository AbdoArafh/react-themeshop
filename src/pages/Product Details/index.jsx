import { AlertTriangle, ThumbsUp } from 'react-feather';
import { useParams } from 'react-router-dom'
import Error404 from '../../components/404';
import StarRating from '../../components/starRating';

export default function ProductDetails({products}) {
    const { id } = useParams();
    const product = products.find(
        el => el.id === id
        );
    // calculated average of the reviews
    const avgRating = product ? product.reviews.reduce((a, b) => a + b.rating, 0) / product.reviews.length : 0;
    return (
        product
        ?
        <div className="container mx-auto product-details my-20">
            <section className="overview grid grid-cols-2 sm:mx-2">
                <img src={product.thumbnail} alt={product.name} className="rounded-lg" />
                <div className="info flex flex-col gap-8">
                    {/* todo make a dynamic path */}
                    <div className="path text-gray-500">{product.path.at(-1).replace("/", " ").trim().split(" ").join("/").concat("/")}</div>
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
        </div>
        :
        <Error404 error={`404 Product not found <br> No product with id "${id}"`} />
    )
}
