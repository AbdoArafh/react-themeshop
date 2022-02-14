import questions from './questions.json'
import { useState } from 'react'
import Question from './question'

export default function FAQs() {
  const questionsGenres = Object.keys(questions);
  const [chosenGenre, setChosenGenre] = useState(questionsGenres[0]);

  const handleFilter = (event) => {
    event.preventDefault();
    const {target : el} = event;
    if (el.dataset.genre)
      setChosenGenre(el.dataset.genre)
  }

  return (
    <div className="faqs my-40 container mx-auto">
        <div className="thin-container w-[100%] max-w-[720px] mx-auto">
          <h3 className="text-center uppercase text-gray-500 ">If you have any questions</h3>
          <h1 className="text-center text-5xl mt-10 mb-32 font-medium">Frequently Asked Questions</h1>
          <ul className="filters flex flex-row justify-around text-gray-500">
            {questionsGenres.map(
              (genre, i) => (
                <li
                  key={i.toString()}
                  data-genre={genre}
                  className={"hover:text-black select-none cursor-pointer transition-colors" + (chosenGenre === genre ? " text-black" :  "")}
                  onClick={handleFilter}>
                  {genre}
                </li>
              )
            )}
          </ul>
          <div className="questions mt-24 mx-1">
            <h1 className="title uppercase text-2xl font-normal mb-10">
                {chosenGenre}
            </h1>
            {questions[chosenGenre].map(
              question => <Question question={question.question} answer={question.answer} />
            )}
          </div>
          <h1 className="contact-us mt-32 mb-48 text-center text-3xl">
            We're here to help! 
            <a href="#" className="ml-2 underline text-orange-500 hover:no-underline"> Contact Us</a>
          </h1>
        </div>
        <div className="newsletter">
          <form className="flex flex-row justify-between">
            <label htmlFor="email" className="uppercase">Subscribe to our news letter and get 10% of your purchase</label>
            <input type="email" name="email" id="email" autoComplete="no" placeholder="Your email address" className="outline-none" />
            <button type="submit" className="uppercase text-white bg-gray-900 py-1 px-4 font-medium hover:brightness-125">Subscribe</button>
          </form>
        </div>
    </div>
  )
}
