const billingAdresses = [
  {
    "Name": "John Doe",
    "Country": "La La Land",
    "Address": "34 lorem ipsum, sit emit",
    "Postal Code": 12445
  }
]

function InfoPiece({name, value}) {
  return (
    <div>
      <span className="text-gray-500">{name}: </span>
      <span>{value}</span>
    </div>
  )
}

function BillingAdress({address}) {
  return (
    <div className="my-10 flex flex-col gap-8">
      <h1 className="text-xl">Billing Information</h1>
      <div className="info flex flex-col gap-3">
        {Object.keys(address).map(
          (name, i) => <InfoPiece key={i.toString()} name={name} value={address[name]} />
        )}
      </div>
      <a href="#" className="text-blue-600">Edit your billing address</a>
    </div>
  )
}

export default function BillingAdresses() {
  const addresses = billingAdresses;
  return (
    <div className="billing-adresses">
      <h1 className="text-2xl my-10">Billing Addresses</h1>
      <p>The following addresses will be used on the checkout page by default</p>
      {addresses.map(
        (address, i) => <BillingAdress key={i.toString()} address={address} />
      )}
    </div>
  )
}
