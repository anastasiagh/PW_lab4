import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";


function ShowQuestions(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [result, setResult] = useState(0);
  const [isOver, setIsOver] = useState(false);
  // const {quizId} = useParams();


  useEffect(() => {
    console.log(props.questions);
  }, []);

  const handleAnswers = (event) => {
    setAnswer(event.target.value);
    const test = event.target.value;
    setSelectedAnswer(test);
  };

  const handleClick = () => console.log(selectedAnswer);

  const nextQuestion = () => {
    const userIdNoRepeat = parseInt(localStorage.getItem("user-info"));
    const questionIdNoRepeat = props.questions[currentIndex].id;

    console.log(userIdNoRepeat);
    console.log(questionIdNoRepeat);
    console.log(selectedAnswer);

    const postData = {
      data: {
        question_id: questionIdNoRepeat,
        answer: selectedAnswer,
        user_id: userIdNoRepeat,
      },
    };

    axios
      .post(
        `https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/submit`,
        postData,
        {
          headers: {
            "X-Access-Token":
              "066a46e9a795771070159c29c28a763b27d1178908a9c4e4b690e8589f0b1d85",
          },
        }
      )
      .then(function (res) {
        if (res.data.correct) setResult((prevState) => prevState + 1);

        // if (currentQuestion + 1 < quiz.questions.length) {setCurrentQuestion((prevState) => prevState + 1)}
        // else setSubmited(true);

        // console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });

    // setShowAns(false);
    if (currentIndex === props?.questions.length - 1) {
      setIsOver(true);
      // alert(`Your score is ${result}`)
      console.log(result)
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      {isOver ? (
        <>
          <p>Quiz finished</p>
          <p>Yor result is {result} out of {props?.questions.length} </p>
          <button component={Link } to = "/main"> fuck you</button>
        </>
      ) : (
        <>
          <div>{props?.questions[currentIndex]?.question}</div>
          <div className="answers ">
            {props?.questions[currentIndex]?.answers.map((answer, index) => (
              <div className="question-answers" key={index}>
                <input
                  type="radio"
                  name={props.questions[currentIndex].question}
                  value={answer}
                  onClick={(event) => handleAnswers(event)}
                />
                <label htmlFor={answer}>{answer}</label>
              </div>
            ))}
            <button onClick={() => nextQuestion()}>
              Next chestion {result}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowQuestions;
