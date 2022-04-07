import './App.css';
import Main from './components/mainPage.js';
import Login from './components/login.js';
import Header from './components/header';
import MainComp from './components/mainComponent';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Main /> */}
        <MainComp />
      </div>
    </BrowserRouter>
  );
}

export default App;
