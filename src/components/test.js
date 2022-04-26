import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function QuestionCard(props) {
   const [currentIndex, setCurrentIndex] = useState(0)
   const [endQuiz, setEndQuiz] = useState(false)
   const [score, setScore] = useState(0);
   const [avg, setAvg] = useState(0);
   const [showAns, setShowAns] = useState(false);
   const [questions, setQuestions] = useState([]);
   const {quizId} = useParams();


   useEffect(() => {
       console.log(questions[0]);
   //  axios.get(`https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/377`, { 
   //       headers: { "X-Access-Token": process.env.REACT_APP_ACCESS_TOKEN }})
   //      .then(res => {  
   //          // setQuiz(res.data);
   //          // setLoaded(true);
   //          const questions = res.data.questions;
   //          setQuestions(questions);
   //          // console.log(questions)
   //          // console.log(res.data)
   //      })
   //      .catch(function (error) {
   //          console.log(error);
   //      });
}   , []);

   //function to calc score and show correct answer
   const handleAnswerClick = (isCorrect, index, e) => {
      setShowAns(true)
      if (isCorrect === questions[index].correct_answer) {
         setScore((prev) => prev + 1);
      }
      setTimeout(() => {
         nextQuestion()
      }, 1800)
   }

   //function to go to next question if within bounds of quiz length and hide correct answer 
   // if ouside the bounds of the quiz array, the quiz will end
   const nextQuestion = () => {
      setShowAns(false)
      if (currentIndex === questions.length - 1) {
         endOfQuiz()
      }
      else {
         setCurrentIndex(prev => prev + 1);
      }
   }

   //function to pre-emptively end quiz
   const seeResults = () => {
      setEndQuiz(true)
      setAvg((score / currentIndex) * 100)
   }

   const endOfQuiz = () => {
      setEndQuiz(true)
      setCurrentIndex(prev => prev + 1)
      setAvg((score / currentIndex) * 100)
   }

   //function to result all variables 
   const reset = () => {
      setEndQuiz(false);
      setCurrentIndex(0);
      setScore(0)
      setShowAns(false)
   }
   if (endQuiz) {
      return (
         <>
            {avg >= 80 &&
              <p>Quiz finished</p>
            }
            <div >
               <div className="spacer"></div>
               <div className="top" style={{ textAlign: 'center' }}>
                
                  <p>you scored <strong>{score}</strong> out of <strong>{currentIndex}</strong> = <strong>{avg.toFixed(1)}%</strong></p>
               </div>
               <button onClick={reset} >Start over?</button>
            </div>
         </>
      )
   }

   return (
      <>
          <div className='question-box m-full-y' >
            <div className="top">
               <h6 className='top-text'>question {currentIndex + 1} of {questions.length}</h6>
               <div className="question">
                  <h2 className='question-text'>{questions[currentIndex].question}</h2>
               </div>
            </div>

            <div className="answers-row middle">
                {/* {questions[currentIndex].answers.map((answers, key) => (
                  <button
                     
                     onClick={(e) => { handleAnswerClick(answers, currentIndex, e) }}
                     key={key}
                     disabled={showAns} >
                  
                     {answers[key]} 
                  </button> 
                ))} */}
               </div>
{/*className={showAns && answer.isCorrect ? 'ans' : ''} */}
            <div className="bottom">
               <button
                  className='secondary'
                  onClick={seeResults}
                  disabled={showAns || currentIndex === 0}>
                  See Results
               </button>
               
            </div> 
         </div>
      </>
   )
}

export default QuestionCard