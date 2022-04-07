import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink className="nav-link" to="/main">
                <a href=''>Main</a>
                </NavLink>
                <NavLink className="nav-link" to="/about">
                <a href=''>About</a>
                </NavLink>
                <NavLink className="nav-link" to="/login">
                <a href=''>Log in</a>
                </NavLink>
            </div>
        )
    }
}

export default Header;