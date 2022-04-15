import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div>
      <div className="main">
        <div className="card-body">
            <h1 >Start the quiz</h1>
            <p >Good luck!</p>
            <button className="start-quiz" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Start;