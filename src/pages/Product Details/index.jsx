import { useParams } from 'react-router-dom'
import Error404 from '../../components/404';
import { ProductsArray } from "../../utils/readyProducts"

export default function ProductDetails() {
    const { id } = useParams();
    const product = ProductsArray.find(
        (el) => el.id === id
    );
    return (
        product
        ?
        <div className="text-center text-2xl my-20">
            {product.name}
        </div>
        :
        <Error404 error={`404 Product not found <br> No product with id "${id}"`} />
    )
}
