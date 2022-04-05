import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
        return (
            <div className="main">
                    <div className="name">
                        <h1>Hey you, choose a quiz</h1>
                    </div>
                    <div className="quizes-here">
                        <div className='quiz'>
                            <h2>Quiz 1</h2>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <input type="button" className="start-quiz" value="Start quiz" />
                        </div>
                        <div className='quiz'>
                            <h2>Quiz 1</h2>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <input type="button" className="start-quiz" value="Start quiz" />
                        </div>
                    </div>
            </div>
        )
}

export default Main;