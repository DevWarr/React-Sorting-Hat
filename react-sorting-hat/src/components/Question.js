import React from 'react';


/**
 * props.
 *       display
 *       question
 *       next
 * 
 * form- on submit: [contact, value]
 *                ( ["contact", "Gryffindor"/"Hufflepuff"/etc] )
 */

const Questions = (props) => {


    if(props.display === "0") {
        return (
            <div className="introduction">
                <button onClick={props.next}>Start Quiz!</button>
            </div>
        );
    }

    else if(props.display === "7") {
        return (
            <div className="result"></div>
        );
    }

    else {

        // What the button says, and which prop we call when we click
        const buttonText = props.display === "6" ? "Finish" : "Next";

        return (
            <div className="form">
                <h2>{props.question["title"]}</h2>
                <form onSubmit={props.next}>
                    <input 
                        type="radio" 
                        name="A" 
                        value={props.question["A"][0]}
                    /> {props.questions["A"][1]}
                    <input 
                        type="radio" 
                        name="B" 
                        value={props.question["B"][0]}
                    /> {props.questions["B"][1]}
                    <input 
                        type="radio" 
                        name="C" 
                        value={props.question["C"][0]}
                    /> {props.questions["C"][1]}
                    <input 
                        type="radio" 
                        name="D" 
                        value={props.question["D"][0]}
                    /> {props.questions["D"][1]}

                    <button type="submit">{buttonText}</button>
                </form>
            </div>
        );
    }
}

export default Questions;