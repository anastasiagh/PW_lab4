import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const FinishQuiz = ({results, data, time}) => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('user-info')).id);
    const [response, setResponse] = useState([]);
    const [score, setScore] = useState(0);
    const quizId = useParams().id;
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
 
    useEffect(() => {
        console.log('user id', userId);
        results.map(r => submitAnswer(r.id, r.a, userId));
    }, [])

    function submitAnswer (question_id, answer, user_id) {
        const postData = {data : {question_id, answer, user_id}}
        console.log(postData)

        axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/'+ quizId +'/submit', postData,  
        {headers:{
                        "X-Access-Token": 'baa5c43c80801b026c9113061d49a2616ada5c5254c3b380fee6523d7c23c37f',
                    }
                })
        .then((res) => {
            setResponse(prevState => [ ...prevState, res.data])
            console.log("response data", res.data)
            if (res.data.correct)
                setScore(prevState => prevState + 1)
            setLoading(true);
        })
        .catch((err)=>{
            console.log(err)
        })
      }
    
    return(
      <div>
        <div className="main">
          <div className='card-body'>
              <h3 className="card-title">Your results</h3>
              <h2 className="card-subtitle">{score} of {data.length}</h2>
              <button className='start-quiz' onClick={()=>navigate("/quizzes")}> Return </button>
          </div>
        </div>
      </div>
    );
}
export default FinishQuiz;