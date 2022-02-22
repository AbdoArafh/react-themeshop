import Product from './product'

export default function Products({products}) {
    return (
        <>
            <ul className="filters flex flex-row uppercase justify-around font-normal text-gray-800 select-none mx-auto lg:mx-36 my-10">
                {["All", "website seo", "fb/gg ads", "email marketing", "web design", "wordpress"].map(
                    (filter, i) => (
                        <li key={i.toString()} className="hover:text-orange-500 cursor-pointer">
                            {filter}
                        </li>
                    )
                )}
            </ul>
            <div className="products grid lg:grid-cols-3 sm:grid-cols-2 sm:mx-2 gap-10 my-10">
                {products.map((product, i) => <Product key={i.toString()} product={product} />)}
            </div>
        </>
    )
}
