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

const Question = (props) => {
    console.log(props.question);
    console.log('banana');
    if(props.display === "0") {
        return (
            <div className="introduction">
                <button onClick={props.next}>Start Quiz!</button>
            </div>
        );
    }

    else if(props.display === "7") {
        return (
            <div className="result">Testing</div>
        );
    }

    else {
        console.log('here');

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
                    /> {props.question["A"][1]}
                    <input 
                        type="radio" 
                        name="B" 
                        value={props.question["B"][0]}
                    /> {props.question["B"][1]}
                    <input 
                        type="radio" 
                        name="C" 
                        value={props.question["C"][0]}
                    /> {props.question["C"][1]}
                    <input 
                        type="radio" 
                        name="D" 
                        value={props.question["D"][0]}
                    /> {props.question["D"][1]}

                    <button type="submit">{buttonText}</button>
                </form> 
            </div>
        );
    }
}

export default Question;