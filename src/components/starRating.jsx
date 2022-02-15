import StarFillIcon from "../components/icons/starFillIcon"
import StarHalfIcon from "../components/icons/starHalfIcon"
import StarIcon from "../components/icons/starIcon"

export default function StarRating({rating, className, fullRating=5}) {
  const diff = fullRating - Math.ceil(rating);
  return (
    <div className={`star-rating flex flex-row ${className ? className : ""}`}>
        {Array.from(Array(Math.floor(rating))).map(
            (_, i) => <StarFillIcon key={i.toString()} />
        )}
        {rating % 1 > 0 && <StarHalfIcon />}
        {diff > 0 && Array.from(Array(diff)).map((_, i) => <StarIcon key={"empty-" + i.toString()}/>)}
    </div>
  )
}
