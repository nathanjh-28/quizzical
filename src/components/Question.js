import React from "react";

export default function Question(props) {
    return (<div>
        <h2> {props.question}</h2>
        <label>
            A.
            <input type="radio" name={props.question} id={props.question} />
        </label>
        <label>
            B.
            <input type="radio" name={props.question} id={props.question} />
        </label>
        <label>
            C.
            <input type="radio" name={props.question} id={props.question} />
        </label>
        <label>
            D.
            <input type="radio" name={props.question} id={props.question} />
        </label>

        <hr />

    </div>)
}