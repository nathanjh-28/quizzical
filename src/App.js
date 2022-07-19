import React from "react";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import SubmitBtn from './components/SubmitBtn'


const apiURL = 'https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple'

export default function App() {

  const [questions, setQuestions] = React.useState([]);

  const [startQuiz, setStartQuiz] = React.useState(false)

  const [answers, setAnswers] = React.useState([])

  function handleAnswers(ans, idx) {
    setAnswers(prevAns => {
      const newAns = [...prevAns]
      newAns[idx] = ans;
      return newAns
    })
  }

  function startTheQuiz() {
    setStartQuiz(true)
  }

  React.useEffect(() => {
    async function getQuestions() {
      const res = await fetch(apiURL)
      const data = await res.json()
      setQuestions(data.results)
      //console.log(data.results)
    }
    getQuestions()
  }, [])

  const questionElements = questions.map((obj, idx) => {
    return <Question
      obj={obj}
      key={idx}
      idx={idx}
      handleChange={handleAnswers}
    />
  })

  console.log(answers)

  return (
    <main>
      {startQuiz ? questionElements : <Welcome handleClick={startTheQuiz} />}


      {startQuiz && <SubmitBtn />}
    </main>
  );
}

