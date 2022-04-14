import React from "react";
import { useNavigate } from "react-router-dom";
// import Quiz from "./Quiz";

function ViewQuizes(props){
    let entries = Object.entries(props);
    return(
        <div className="main">
                    <div className="name">
                        <h1>Hey you, choose a quiz</h1>
                    </div>
                    {entries.map(quiz =>
                    <div className="quizes-here">
                        <div className='quiz'>
                            <h2>Quiz</h2>
                            <p>Title: {quiz[1].title}</p>
                            <p>Question count: {quiz[1].questions_count}</p>
                            <input type="button" className="start-quiz" value="Start quiz" />
                        </div>
                    </div>
                )}
            </div>
        )
}
export default ViewQuizes;