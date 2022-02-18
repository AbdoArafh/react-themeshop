import Profile from "./profile";
import { Link } from 'react-router-dom';

function formatDate(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function ordNumber(n) {
    return n + (n < 4 ? (n === 3 ? "rd" : (n === 2 ? "nd" : "st")) : "th");
  }
  if (!(date instanceof Date)) date = new Date(date);
  return months[date.getMonth()] + " " + ordNumber(date.getDate()) + ", " + date.getFullYear();
}

function compareOrderStatus(a, b) {
  return a.status.toLowerCase() === b.toLowerCase();
}

function Order({order}) {
  const statusColors = {
    "pending": "text-blue-400",
    "delivered": "text-gray-500",
    "canceled": "text-red-500"
  }
  return (
    <tr>
      <td className="text-gray-500">{formatDate(order.date)}</td>
      <td>
        <div className="underline mb-1">{order.name}</div>
        <div><span className="text-gray-500">QTY: </span>{order.quantity}</div>
      </td>
      <td className={statusColors[order.status.toLowerCase()]}>
        {order.status}
      </td>
      <td>
        {compareOrderStatus(order, "pending") && <Link to="/shopping-cart" className="hover:text-gray-500">Checkout</Link>}
      </td>
    </tr>
  )
}

function sortOrders(ord) {
  return ord.filter(order => compareOrderStatus(order, "pending")).concat(
      ord.filter(order => compareOrderStatus(order, "delivered")).concat(
          ord.filter(order => !compareOrderStatus(order, "pending") && !compareOrderStatus(order, "delivered"))
      )
    )
}

let allOrders = [
  {
    date: Date.now(),
    name: "Deneb Theme",
    quantity: 1,
    status: "pending"
  },
  {
    date: Date.now(),
    name: "Miles Theme",
    quantity: 2,
    status: "delivered"
  },
  {
    date: Date.now(),
    name: "Paito Theme",
    quantity: 1,
    status: "canceled"
  },
  {
    date: Date.now(),
    name: "Whatever Theme",
    quantity: 1,
    status: "pending"
  },
]

function Orders({showAll}) {
  let orders = sortOrders(allOrders);
  orders = showAll ? orders : orders.slice(0, 3);
  console.log(orders);
  return (
    <div className="orders relative">
      <h1 className="title text-3xl font-semibold">
        {showAll ? "Order History" : "Recent Orders"}
      </h1>
      <table className="w-[100%]">
        <thead>
          <tr className="font-bold text-black text-left">
            <th>Date</th>
            <th>Items</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => <Order order={order} />)}
        </tbody>
      </table>
      {/* todo add show all products here */}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="dashboard flex flex-row">
        <Profile />
        <div className="content">
          <Orders showAll />
          <Orders />
        </div>
    </div>
  )
}
