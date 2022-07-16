import React from "react";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import SubmitBtn from './components/SubmitBtn'


const apiURL = 'https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple'

export default function App() {

  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
  }

  function shuffle(arr) {
    let count = 5;
    while (count > 0) {
      swap(arr, Math.floor(Math.random() * arr.length), Math.floor(Math.random() * arr.length))
      count--;
    }
    return arr;
  }



  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    async function getQuestions() {
      const res = await fetch(apiURL)
      const data = await res.json()
      setQuestions(data.results)
      console.log(data.results)
    }
    getQuestions()
  }, [])

  const questionElements = questions.map((obj, idx) => {
    return <Question
      obj={obj}
      key={idx} />
  })

  return (
    <main>
      <Welcome />
      {questionElements}

      <SubmitBtn />
    </main>
  );
}

