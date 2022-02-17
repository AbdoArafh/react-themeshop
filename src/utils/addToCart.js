export default function AddToCart(product, quantity=1) {
    const products = JSON.parse(localStorage.getItem("shopping-cart")) ?? {};
    const currentProduct = products[product.id];
    if (currentProduct)
        currentProduct.quantity++;
    else
        products[product.id] = {
            name: product.name,
            features: product.features,
            price: product.price,
            quantity,
            time: Date.now(),
            src: product.thumbnail
        }
    localStorage.setItem("shopping-cart", JSON.stringify(products));
}