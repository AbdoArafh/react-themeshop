import { useEffect, useState } from "react"
import {
  CheckSquare,
  XCircle,
  MinusCircle,
  PlusCircle } from "react-feather";
import { Link } from "react-router-dom";
import FeaturedProducts from "../../components/featuredProducts";
import {
  getProducts,
  removeFromCart,
  CART_NAME,
  incrementQuantity,
  decrementQuantity,
  clearCart } from "../../utils/cart"

function getPrice(str) {
  if (str.toLowerCase() === "free") return 0;
  return Number(str.replaceAll("$", ""))
}

function calculateTotal(price, quantity) {
  if (getPrice(price) === 0) return "free";
  return (getPrice(price) * quantity).toString() + "$"
}

export default function ShoppingCart() {
  const [products, setProducts] = useState(getProducts());

  function updateProducts() {
    setProducts(getProducts());
  }

  function storageHandler(e) {
    if (e.key !== CART_NAME) return;
    updateProducts();
  }

  useEffect(() => {
    window.addEventListener("storage", storageHandler);
    return () => {
      window.removeEventListener("storage", storageHandler);
    }
  })

  return (
    <div className="shopping-cart container mx-auto my-20">
      <div className="text-center uppercase text-gray-500">Your favorite products</div>
      <h1 className="text-center my-10 text-5xl font-semibold">Shopping Cart</h1>

      <div className="cart">
        <div className="title text-xl mb-8">Your cart items</div>
        <table className="w-[100%]">
          <thead className="shadow-xl h-16">
            <tr className="text-gray-500 font-medium text-left">
              {["", "Product Name", "Price", "Quantity", "Total", ""].map(
                (head, i) => <th key={i.toString()}>{head}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {Object.keys(products).map(
              (id, i) => {
                const product = products[id];
                return (
                  <tr key={i.toString()}>
                    <td className="w-32 py-10">
                      <img src={product.src} alt={product.name} className="pr-5" />
                    </td>
                    <td>
                      <div className="font-medium">
                        {product.name}
                      </div>
                      <ul className="features ml-3">
                        {product.features.slice(0, 2).map(
                          (feature, i) => (
                            <li key={i.toString()}>
                              <CheckSquare className="inline h-5 text-green-600 mr-1"/>
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </td>
                    <td className="uppercase">
                      {product.price}
                    </td>
                    <td>
                      {product.quantity}
                    </td>
                    <td className="uppercase">
                      {calculateTotal(product.price, product.quantity)}
                    </td>
                    <td>
                      <button
                        className="text-red-500 hover:text-red-400 transition-colors mr-2"
                        onClick={() => {
                          removeFromCart(id);
                          updateProducts();     
                        }}>
                        <XCircle className="w-5" />
                      </button>
                      <button
                        className="text-green-400 hover:text-green-300 transition-colors mr-2"
                        onClick={() => {
                          incrementQuantity(id);
                          updateProducts();     
                        }}>
                        <PlusCircle className="w-5" />
                      </button>
                      <button
                        className=" text-gray-500 hover:text-gray-400 transition-colors"
                        onClick={() => {
                          decrementQuantity(id);
                          updateProducts();     
                        }}>
                        <MinusCircle className="w-5" />
                      </button>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
        <div className="controls my-10 mx-1 flex flex-row justify-between">
            <Link to="/" className="py-5 px-10 bg-orange-600 text-white ">
              &lt; &nbsp; Back to Shop
            </Link>

            {Object.keys(products).length
            ? <button
                className="clear-all flex flex-row items-end text-red-500 hover:text-red-400"
                onClick={() => {
                  clearCart();
                  updateProducts();
                }}
              >
                <XCircle className="w-5 inline mr-1" />
                Clear All
              </button>
            : null}
        </div>      
      </div>
      <FeaturedProducts />
    </div>
  )
}
