import Profile from "./profile";
import Orders from "./orders";
import BillingAdresses from "./billingAdresses";

const accountDetails = {
  profile_picture: "https://via.placeholder.com/100x100.png/ccc/ccc",
  full_name: "John Doe",
  email: "username@example.com",
  phone: "+(01) 234 567 890",
  country: "LaLa Land",
  post_code: "123456"
}

export default function Dashboard({navigate}) {
  return (
    <div className="dashboard flex flex-col lg:flex-row gap-20">
        <Profile navigate={navigate} accountDetails={accountDetails}/>
        <div className="content w-[100%]">
          <Orders navigate={navigate} />
          <BillingAdresses />
        </div>
    </div>
  )
}
