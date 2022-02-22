const accountDetails = {
  profile_picture: "https://via.placeholder.com/100x100.png/ccc/ccc",
  full_name: "John Doe",
  email: "username@example.com",
  phone: "+(01) 234 567 890",
  country: "LaLa Land",
  post_code: "123456"
}

function CustomInput(props) {
  return (
    <input className="placeholder:text-center outline-none" {...props}/>
  )
}

export default function AccountDetails() {
  return (
    <div className="mt-32 mb-20 flex flex-col justify-center gap-10">
      <div className="hello">
        <h1 className="text-3xl text-center">Hello! {accountDetails.full_name.split(" ")[0]}</h1>
        <hr />
      </div>
      <div className="profile-picture flex flex-col text-center">
        <img className="rounded-full w-24 mx-auto mb-10" src={accountDetails.profile_picture} alt="profile picture" />
        <a href="#" className="text-black hover:text-gray-500">Upload New Picture</a>
        <a href="#" className="text-red-500 hover:text-red-400">Delete</a>
      </div>
      <form className="flex flex-col gap-8 justify-center items-center">
        <CustomInput type="text" name="full_name" placeholder={accountDetails.full_name} />
        <CustomInput type="email" name="email" placeholder={accountDetails.email} />
        <CustomInput type="password" name="password" placeholder="Password" />
        <CustomInput type="password" name="re-password" placeholder="Re-Type Password" />
        <CustomInput type="text" name="country" placeholder={accountDetails.country} />
        <CustomInput type="text" name="phone" placeholder={accountDetails.phone} />
        <CustomInput type="text" name="post_code" placeholder={accountDetails.post_code} />
        <input className="text-white bg-black py-5 px-40 my-5" type="submit" value="Save Changes" />
      </form>
    </div>
  )
}
