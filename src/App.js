import React from "react";
const apiURL = 'https://opentdb.com/api.php?amount=5&category=27&difficulty=medium&type=multiple'

export default function App() {


  React.useEffect(() => {
    async function getQuestions() {
      const res = await fetch(apiURL)
      const data = await res.json()
      console.log(data)
    }
    getQuestions()
  }, [])

  return (
    <h1>Quizzical</h1>
  );
}

