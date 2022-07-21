import React from "react";

export default function Question({ obj, handleChange, idx }) {

    const [answerArr, setAnswerArr] = React.useState([]);

    //helper
    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
        return arr;
    }
    // helper
    function shuffle(arr) {
        let count = 5;
        while (count > 0) {
            swap(arr, Math.floor(Math.random() * arr.length), Math.floor(Math.random() * arr.length))
            count--;
        }
        return arr;
    }

    React.useEffect(() => {
        const newAns = shuffle([...obj.incorrect_answers, obj.correct_answer])
        setAnswerArr(newAns)

    }, [])

    const answerArrEls = answerArr.map(item => {
        return (
            <div className="answer-block">
                <input
                    type="radio"
                    name={obj.question}
                    id={item}
                    value={item}
                    onChange={() => handleChange(item, idx)}

                />
                <label htmlFor={item}>
                    {item}
                </label>
            </div>)
    })


    return (<div>
        <h2> {obj.question}</h2>
        {answerArrEls}

    </div>)
}