
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import MainComp from './components/mainComponent';
import { BrowserRouter } from 'react-router-dom';
import Quizes from './components/quizzes';
import Quiz from './components/quiz';
import QuestionCard from './components/test';
import Test1 from './components/test1';

function App() {
  return (
    // require('dotenv').config(),
    <BrowserRouter>
      <div className="App">
        
        <MainComp />
        {/* <Quiz /> */}

        {/* <Test1 /> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
