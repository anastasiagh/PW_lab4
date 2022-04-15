import './App.css';
import Main from './components/mainPage.js';
import Login from './components/login.js';
import Header from './components/header';
import MainComp from './components/mainComponent';
import AddQuiz from './components/addQuiz';
import Quizes from './components/quizzes';
import Answer from './components/passQuiz';
import Quiz from './components/quiz';
import FinishQuiz from './components/finishQuiz'
import { BrowserRouter } from 'react-router-dom';
import ViewQuizes from './components/viewQuizes';
import Audio from './components/audio';
// import BgAudio from 'react-native-background-audio';



// const audio_options = {
//   source:{remote:{uri:"http://www.sample-videos.com/audio/mp3/india-national-anthem.mp3"}}
// }

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Quiz /> */}
        {/* <ViewQuizes /> */}
        {/* <Quizes /> */}
        <MainComp />
      </div>
    </BrowserRouter>
  );
}

export default App;
