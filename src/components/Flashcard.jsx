import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = () => {

    const [cardIndex, setCardIndex] = useState(0); // Holds the index of teh cards in the dictionary
    const [showAnswer, setShowAnswer] = useState(false); // Show the answer or not

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
    }

    const showTheAnswer = () => {
        setShowAnswer(!showAnswer);
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
                  <button onClick={nextQA}>Next Question</button>
                </div>
                ) : (
                <div onClick={showTheAnswer}>
                  <p>{questionAnswer[cardIndex].question}</p>
                  <p>Click the question above to show answer!</p>
                </div>
               )}
            </div>
        </div>
    );
};

export default Flashcard;
