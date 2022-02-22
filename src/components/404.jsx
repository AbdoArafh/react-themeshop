export default function Error404({children}) {
  return (
    <div className="text-center my-20 py-10 bg-red-600/50 text-red-600 font-medium text-2xl mx-5 rounded-xl flex flex-col gap-4">
        {children
        ||
        "404 not found"}
    </div>
  )
}
