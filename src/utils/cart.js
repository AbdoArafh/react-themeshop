export const CART_NAME = "shopping-cart";

export function getOrders() {
    return JSON.parse(localStorage.getItem(CART_NAME)) ?? {};
}

export function setOrders(products) {
    localStorage.setItem(CART_NAME, JSON.stringify(products))
}

export function getPrice(str) {
    if (str.toLowerCase() === "free") return 0;
    return Number(str.replaceAll("$", ""));
}

export function calculateTotal(price, quantity) {
    if (getPrice(price) === 0) return "free";
    return (getPrice(price) * quantity).toString() + "$";
}

export function AddToCart(product, quantity=1) {
    const products = getOrders();
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
            src: product.thumbnail,
            total: calculateTotal(product.price, quantity)
        }
    setOrders(products);
}

export function removeFromCart(id) {
    const products = getOrders();
    delete products[id];
    setOrders(products);
}

export function incrementQuantity(id) {
    const products = getOrders();
    products[id].quantity++;
    setOrders(products);
}

export function decrementQuantity(id) {
    const products = getOrders();
    products[id].quantity--;
    setOrders(products);
    if (products[id].quantity === 0) {
        removeFromCart(id);
    }
}

export function clearCart() {
    localStorage.removeItem(CART_NAME);
}