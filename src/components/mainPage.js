import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Quizes from './quizzes';

const Main = () => {
        return (
            <div className="main">
                    <Quizes />
            </div>
        )
}

export default Main;