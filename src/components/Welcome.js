import React from "react";

export default function Welcome({ handleClick }) {
    return (<div>
        <h1>Quizzical</h1>
        <p>5 random questions from Open Trivia Database</p>
        <button onClick={handleClick}>Start Quiz</button>
    </div>)
}