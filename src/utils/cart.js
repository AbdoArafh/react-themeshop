export const CART_NAME = "shopping-cart";

export function getProducts() {
    return JSON.parse(localStorage.getItem(CART_NAME)) ?? {};
}

export function setProducts(products) {
    localStorage.setItem(CART_NAME, JSON.stringify(products))
}

export function AddToCart(product, quantity=1) {
    const products = getProducts();
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
    setProducts(products);
}

export function removeFromCart(id) {
    const products = getProducts();
    delete products[id];
    setProducts(products);
}

export function incrementQuantity(id) {
    const products = getProducts();
    products[id].quantity++;
    setProducts(products);
}

export function decrementQuantity(id) {
    const products = getProducts();
    products[id].quantity--;
    setProducts(products);
    if (products[id].quantity === 0) {
        removeFromCart(id);
    }
}

export function clearCart() {
    localStorage.removeItem(CART_NAME);
}