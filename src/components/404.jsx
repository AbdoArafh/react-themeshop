export default function Error404({error}) {
  return (
    <div className="text-center my-20 py-10 bg-red-600/50 text-red-600 font-medium text-2xl mx-5 rounded-xl flex flex-col gap-4">
        {error
        ?
        error.split(" <br> ").map(
          (err, i) => <div key={i.toString()}> {err} </div>
        )
        :
        "404 not found"}
    </div>
  )
}
