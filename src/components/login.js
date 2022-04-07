import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
        return (
            <div className="main">
                <div className="login-div">
                    <form className="login-form">
                        <h1>Log in</h1>
                        <input type="username" name="username" className="username" placeholder="username" />
                        <input type="password" name="password" className="password" placeholder="password" />
                        <input type="button" className="login-button" value="Log in" />

                    </form>
                </div>
            </div>
        )
}

export default Login;