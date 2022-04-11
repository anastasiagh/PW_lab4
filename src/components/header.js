import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink className="nav-link" to="/main">
                Main
                </NavLink>
                <NavLink className="nav-link" to="/about">
                About
                </NavLink>
                <NavLink className="nav-link" to="/login">
                Log in
                </NavLink>
            </div>
        )
    }
}

export default Header;