import React from "react";

export default function Question({ obj }) {


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

    const answerArr = shuffle([...obj.incorrect_answers, obj.correct_answer])


    return (<div>
        <h2> {obj.question}</h2>
        <label>
            <input type="radio" name={obj.question} id={obj.question} />
            {answerArr[0]}
        </label>
        <label>
            <input type="radio" name={obj.question} id={obj.question} />
            {answerArr[1]}
        </label>
        <label>
            <input type="radio" name={obj.question} id={obj.question} />
            {answerArr[2]}
        </label>
        <label>
            <input type="radio" name={obj.question} id={obj.question} />
            {answerArr[3]}
        </label>


        <hr />

    </div>)
}