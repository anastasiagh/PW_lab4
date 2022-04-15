import React from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./quiz";

function ViewQuizes(props){
    let entries = Object.entries(props);
    
    let navigate = useNavigate();

    function responds(id) {
        console.log(id)
        let idx = id + '';
        let path = '/quizzes/'+ idx;
        navigate(path);
        <Quiz id={id}/>
    }

    return(
        <div className="main">
                    <div className="name">
                        <h1>Hey you, choose a quiz</h1>
                    </div>
                    
                    <div className="quizes-here">
                    {entries.map(quiz =>
                        <div className='quiz' key={quiz[1].id} >
                            <h2>Quiz</h2>
                            <p>Title: {quiz[1].title}</p>
                            <p>Question count: {quiz[1].questions_count}</p>
                            <input type="button" className="start-quiz" value="Start quiz" onClick = {() => responds(quiz[1].id)} />
                        </div>
                    )}
                    </div>
                
            </div>
        )
}
export default ViewQuizes;