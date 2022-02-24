import { useEffect, useState } from "react"
import {
  CheckSquare,
  XCircle,
  MinusCircle,
  PlusCircle } from "react-feather";
import { Link } from "react-router-dom";
import FeaturedProducts from "../../components/featuredProducts";
import {
  getOrders,
  removeFromCart,
  CART_NAME,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  calculateTotal,
  getPrice } from "../../utils/cart"

function TableHead({head}) {
  let title, className;
  if (typeof head !== "string") {
    title = head.title;
    className = head.className;
  } else {
    title = head;
    className= "";
  }
  return (
    <th className={className}>{title}</th>
  )
}

export default function ShoppingCart() {
  const [orders, setOrders] = useState(getOrders());
  const [total, setTotal] = useState(0);

  function updateOrders() {
    setOrders(getOrders());
    setOrders(orders => {
      Object.keys(orders).forEach(
        key => {
          const order = orders[key];
          order.total = calculateTotal(order.price, order.quantity);
          return order;
        }
      );
      setTotal(Object.values(orders).reduce((a, b) => a + getPrice(b.total), 0));
      return orders;
    });
  }

  function storageHandler(e) {
    if (e.key !== CART_NAME) return;
    updateOrders();
  }

  useEffect(() => {
    window.addEventListener("storage", storageHandler);
    updateOrders();
    return () => {
      window.removeEventListener("storage", storageHandler);
    }
  }, [])

  return (
    <div className="shopping-cart container mx-auto my-20">
      <div className="text-center uppercase text-gray-500">Your favorite proucts</div>
      <h1 className="text-center my-10 text-5xl font-semibold">Shopping Cart</h1>

      <div className="cart">
        <div className="title text-xl mb-8">Your cart items</div>
        <table className="w-[100%]">
          <thead className="shadow-xl h-16">
            <tr className="text-gray-500 font-medium text-left">
              {[{title: "", className: "hidden lg:table-cell"}, "Product Name", "Price", "Quantity", "Total", ""].map(
                (head, i) => <TableHead key={i.toString()} head={head} />
              )}
            </tr>
          </thead>
          <tbody>
            {Object.keys(orders).map(
              (id, i) => {
                const order = orders[id];
                return (
                  <tr key={i.toString()}>
                    <td className="w-32 py-10 hidden lg:block">
                      <img src={order.src} alt={order.name} className="pr-5" />
                    </td>
                    <td>
                      <div className="font-medium">
                        {order.name}
                      </div>
                      <ul className="features ml-3">
                        {order.features.slice(0, 2).map(
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
                      {order.price}
                    </td>
                    <td>
                      {order.quantity}
                    </td>
                    <td className="uppercase">
                      {order.total}
                    </td>
                    <td>
                      <button
                        className="text-red-500 hover:text-red-400 transition-colors mr-2"
                        onClick={() => {
                          removeFromCart(id);
                          updateOrders();     
                        }}>
                        <XCircle className="w-5" />
                      </button>
                      <button
                        className="text-green-400 hover:text-green-300 transition-colors mr-2"
                        onClick={() => {
                          incrementQuantity(id);
                          updateOrders();     
                        }}>
                        <PlusCircle className="w-5" />
                      </button>
                      <button
                        className=" text-gray-500 hover:text-gray-400 transition-colors"
                        onClick={() => {
                          decrementQuantity(id);
                          updateOrders();     
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

            {Object.keys(orders).length
            ? <button
                className="clear-all flex flex-row items-end text-red-500 hover:text-red-400"
                onClick={() => {
                  clearCart();
                  updateOrders();
                }}
              >
                <XCircle className="w-5 inline mr-1" />
                Clear All
              </button>
            : null}
        </div>
        {Object.keys(orders).length > 0 && 
          <div className="purchase flex my-20">
              <div className="mx-auto md:ml-auto md:mr-0">
                <div className="total flex flex-row justify-between">
                  <span className="text font-semibold">
                    Total
                  </span>
                  <span className="price">
                    {total !== 0 ? total + "$" : "FREE"}
                  </span>
                </div>
                <div className="sep h-[1px] bg-black/20 my-8"></div>
                <a href="#" className="text-white py-4 px-10 bg-orange-600">
                  Proceed To Checkout
                </a>
              </div>
          </div>
        }
      </div>
      <FeaturedProducts />
    </div>
  )
}
