import { Link } from 'react-router-dom'

export default function Product({product}) {
    return (
        <div className="product">
            <Link to={`/product-details/${product.id}`} className="relative group flex flex-col gap-5">
                <img src={product.thumbnail} alt="placeholder image" className="object-cover w-[100%]" />
                <div className="type text-sm text-orange-500">{product.compatibility.join(" ")}</div>
                <div className="name text-2xl font-medium group-hover:underline">
                    {product.name}
                </div>
                <p className="description">
                    {product.description}
                </p>
            </Link>
            <div className="buy flex flex-row justify-between mt-4">
                <a href={product.demo} className="view-demo hover:text-orange-500 font-medium" target="_blank">
                    View Demo
                </a>
                <div className="price font-medium uppercase">
                    {product.price}
                </div>
            </div>
        </div>
    )
}