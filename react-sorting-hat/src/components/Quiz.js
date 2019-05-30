import React from 'react';
import questionsON from './questions';
import Question from './Question';



class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: "0",
            questions: JSON.parse(questionsON),
            // Questions: {1: {A,B,C,D}, 2: {A,B,C,D} . . .}
            Gryffindor: 0,
            Hufflepuff: 0,
            Ravenclaw: 0,
            Slytherin: 0
        }
    }

    next = e => {
        e.preventDefault();
        console.log(JSON.parse(questionsON)[`${Number(this.state.visible) + 3}`]);
        
    }


    render() {
        return(
            <div>
                <h1>A Short Hogwarts Sorting Quiz!</h1>
                <Question 
                    display={this.state.visible}
                    question={this.state.questions[`${this.state.visible}`] ? this.state.questions[`${this.state.visible}`] : 0}
                    next={this.next}
                />
            </div>
        );
    }

}

export default Quiz;