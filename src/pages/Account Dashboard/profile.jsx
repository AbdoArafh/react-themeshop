import { Edit2 } from "react-feather"

function PersonalInfoPiece({name, value}) {
  return (
    <div className="text-center">
      <span className="text-gray-500">{name}: </span>
      <span>{value}</span>
    </div>
  )
}

export default function Profile({navigate, accountDetails}) {
    return (
        <div className="profile flex flex-col justify-center">
            <img className="w-32 mx-auto mb-5 rounded-full" src={accountDetails.profile_picture} alt="profile picture" />
            <div className="name mx-auto text-2xl mb-16">Hello! {accountDetails.full_name.split(" ")[0]} </div>
            <div className="personalDetails flex flex-col gap-3 mb-16">
                <PersonalInfoPiece name={"Full Name"} value={accountDetails.full_name} />
                <PersonalInfoPiece name={"Email"} value={accountDetails.email} />
                <PersonalInfoPiece name={"Phone"} value={accountDetails.phone} />
                <PersonalInfoPiece name={"Country"} value={accountDetails.country} />
                <PersonalInfoPiece name={"Post Code"} value={accountDetails.post_code} />
            </div>
            <div className="edit text-center">
                <button onClick={navigate} data-name="Account Details" className="pb-1 border-[1px] border-b-black hover:border-b-transparent">
                  <Edit2 className="inline mr-2 h-5" />
                  Edit Profile
                </button>
            </div>
        </div>
    )
}