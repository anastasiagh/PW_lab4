// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Quiz from "./quiz";

// function ViewQuizes(props){
//     let entries = Object.entries(props);
    
//     let navigate = useNavigate();

//     function responds(id) {
//         console.log(id)
//         let idx = id + '';
//         let path = '/quizzes/'+ idx;
//         navigate(path);
//         <Quiz id={id}/>
//     }

//     return(
//         <div className="mainQuizes">
//                     <div className="main-name">
//                         <h1 className="titlee">Please, choose a quiz</h1>
//                     </div>
                    
//                     <div className="quizes-here">
//                     {entries.map(quiz =>
//                         <div className='quiz' key={quiz[1].id} >
//                             <h2 className="titlee">Quiz</h2>
//                             <p className="title">Title: {quiz[1].title}</p>
//                             <p className="title">Question count: {quiz[1].questions_count}</p>
//                             <input type="button" className="start-quiz" value="Start quiz" onClick = {() => responds(quiz[1].id)} />
//                         </div>
//                     )}
//                     </div>
                
//             </div>
//         )
// }
// export default ViewQuizes;