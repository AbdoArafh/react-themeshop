export default function Question({question, answer}) {
  return (
    <div className="question-wrapper mb-20">
        <h3 className="question mb-6">
            {question}
        </h3>
        <p className="answer">
            {answer}
        </p>
    </div>
  )
}
