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
        return (<label>
            <input type="radio"
                name={obj.question}
                id={obj.question}
                value={item}
                onChange={() => handleChange(item, idx)}

            />
            {item}
        </label>)
    })


    return (<div>
        <h2> {obj.question}</h2>
        {answerArrEls}
        <hr />

    </div>)
}