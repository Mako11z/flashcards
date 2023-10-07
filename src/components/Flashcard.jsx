import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = () => {

    const [cardIndex, setCardIndex] = useState(0); // Holds the index of the cards in the dictionary
    const [showAnswer, setShowAnswer] = useState(false); // Show the answer or not
    const [correctOrFalse, setCorrectOrFalse] = useState(false);
    const [Uanswer,setUAnswer] = useState("");
    const [guess, setGuess] = useState(false);

    // Dictionary to hold questions and answers
    const questionAnswer = [
        {question: "What is the capital of Japan?", answer: "Tokyo"},
        {question: "How many continents are there in the world?", answer: "7"},
        {question: "Who wrote 'Romeo and Juliet'", answer: "William Shakespeare"},
        {question: "What is the largest mammal on Earth?'", answer: "Blue Whale"},
        {question: "What is the square root of 64?'", answer: "8"},
        {question: "Who wrote 'Romeo and Juliet'", answer: "William Shakespeare"},
        {question: "What is 10 * 10'", answer: "100"},
        {question: "What is the capitol of Texas?'", answer: "Austin"},
        {question: "How many states are there in the United States?", answer: "50"},
    ];

    const nextQA = () => {
        setCardIndex(cardIndex + 1);
        setShowAnswer(false);
        setGuess(false);
    }

    const prevQA = () => {
        setCardIndex(cardIndex - 1);
        setShowAnswer(false);
        setGuess(false);
    } 

    const showTheAnswer = () => {
        setShowAnswer(!showAnswer);
    }

    const updateAnswer = (e) => {
        setUAnswer(e.target.value);
    }

    const checkAnswer = () => {
        setGuess(true);
        if (Uanswer === questionAnswer[cardIndex].answer) {
            setCorrectOrFalse(true);
        } else {
            setCorrectOrFalse(false);
        }
        setUAnswer("");
    }

    return (
        <div className="flashacards">
            <h1>Time to Study!</h1>
            <h2>Flashacards</h2>
            <h3> Number of cards: {questionAnswer.length} </h3>
            <div className="card">
               {showAnswer ? (
                <div onClick={showTheAnswer}>
                  <p>{questionAnswer[cardIndex].answer}</p>
                </div>
                ) : (
                <>
                    <div onClick={showTheAnswer}>
                        <p>{questionAnswer[cardIndex].question}</p>
                    </div>
                    <input type="text" value={Uanswer} onChange={updateAnswer} />
                    <button onClick={checkAnswer}> Submit </button>
                    {guess && (
                        <div>
                            <p>{correctOrFalse ? "Correct" : "False"}</p>
                        </div>
                    )}
                </>
               )}
               <><p></p></>
               <button onClick={prevQA}> Prev </button>
               <button onClick={nextQA}> Next </button>
            </div>
        </div>
    );
};

export default Flashcard;
