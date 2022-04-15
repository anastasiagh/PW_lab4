import React, {useState, useEffect} from "react";
import axios from "axios";
import PassQuiz from "./passQuiz";
import StartQuiz from "./startQuiz";
import FinishQuiz from "./finishQuiz";
import { useParams } from "react-router-dom";



const Quiz = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getAllQuizes();
    }, [step]);

    const superId = useParams()
    console.log(superId)

   const getAllQuizes = async () =>{
        await axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/' + superId.id,
        {
            headers:{
                    "X-Access-Token": 'baa5c43c80801b026c9113061d49a2616ada5c5254c3b380fee6523d7c23c37f',
                }
        })
        .then((response) => {
            const myQuiz = response.data;
            setQuestions(myQuiz.questions); 
            console.log(questions) 
        })
    }

   const quizStart = () => {
    setStep(2);
    }

    return(
        <div className="main">
            <div className="Quiz">
                {step === 1 && <StartQuiz onQuizStart = {quizStart}/>}
                {step === 2 && <PassQuiz data={questions[activeQuestion]} onAnswerUpdate={setAnswers}
                    numberOfQuestions={questions.length} activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion} onSetStep={setStep} />}
                {step === 3 && <FinishQuiz results = {answers} data = {questions}  />}
            </div>
        </div>
    )
}
export default Quiz;