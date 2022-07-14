import React from "react";
import Question from "./components/Question";
import SubmitBtn from './components/SubmitBtn'


const apiURL = 'https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple'

export default function App() {


  React.useEffect(() => {
    async function getQuestions() {
      const res = await fetch(apiURL)
      const data = await res.json()
      console.log(data.results)
    }
    getQuestions()
  }, [])

  return (
    <main>
      <h1>Quizzical</h1>
      <p>5 random questions from Open Trivia Database</p>
      <button>Start Quiz</button>
      <Question />
      <Question />
      <Question />
      <Question />
      <SubmitBtn />
    </main>
  );
}

