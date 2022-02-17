import { useState } from "react"
import { CheckSquare, XCircle } from "react-feather";

function getProducts() {
  return JSON.parse(localStorage.getItem("shopping-cart")) ?? {};
}

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

  return (
    <div className="shopping-cart container mx-auto my-20">
      <div className="text-center uppercase text-gray-500">Your favorite products</div>
      <h1 className="text-center my-10 text-5xl font-semibold">Shopping Cart</h1>

      <div className="cart">
        <div className="title text-xl mb-8">Your cart items</div>
        <table className="w-[100%]">
          <thead className="shadow-xl h-16">
            <tr>
              {["", "Product Name", "Price", "Quantity", "Total", ""].map(
                (head, i) => <th key={i.toString()}>{head}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {Object.values(products).map(
              product => (
                <tr>
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
                    <XCircle />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>        
      </div>

      {Object.keys(products).map(
        (productKey, i) => <pre key={i.toString()}>
          {JSON.stringify(products[productKey], null, 4)}
        </pre>
      )}
    </div>
  )
}
