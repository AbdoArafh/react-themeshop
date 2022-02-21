import { useParams } from 'react-router-dom'
import Products from '../../components/products';

export default function AllProducts({products}) {
    const params = useParams();
    let tags = params.tags ? params.tags.split(",") : [];
    const filteredProducts = products.filter(
        product => tags.every(
            tag => product.tags.includes(tag)
        )
    );
    return (
        <div className="all-products container mx-auto my-20">
            <div className="text-center uppercase text-gray-500">Our Journal</div>
            <h1 className="text-center text-5xl my-10 font-bold">Hand Crafted themes exclusively designed for amazing projects</h1>
            <h1 className="text-center text-3xl mt-20 font-semibold">Our products</h1>
            <Products products={filteredProducts} />
        </div>
    )
}
