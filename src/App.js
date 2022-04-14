import './App.css';
import Main from './components/mainPage.js';
import Login from './components/login.js';
import Header from './components/header';
import MainComp from './components/mainComponent';
import AddQuiz from './components/addQuiz';
import Quizes from './components/quizzes';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Main /> */}
        {/* <MainComp /> */}
        <Quizes />
      </div>
    </BrowserRouter>
  );
}

export default App;
