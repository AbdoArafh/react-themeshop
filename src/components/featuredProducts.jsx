import { FeaturedProductsArray } from '../utils/readyProducts'
import Product from './product';

export default function FeaturedProducts() {
    const products = FeaturedProductsArray;
    return (
        <div className="featured-products my-32">
            <h1 className="font-medium text-3xl mb-8">Featured Products</h1>
            <div className="products grid lg:grid-cols-3 sm:grid-cols-2 sm:mx-2 gap-10">
                {products.map(
                    product => <Product product={product} />
                )}
            </div>
        </div>
    )
}
