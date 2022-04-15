import React, { Component } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header()  {
    localStorage.clear();
    let user = JSON.parse(localStorage.getItem('user-info'))
    
        return (
            <div className="header">
                
                {
                    localStorage.getItem('user-info') ?
                    <>
                    <NavLink className="nav-link" to="/main">
                    Main
                    </NavLink>
                    
                   </>
                    :
                    <>
                    <NavLink className="nav-link" to="/login">
                    Log in
                    </NavLink>
                    {/* <NavLink className="nav-link" to="/main">
                    {user.name} {user.surname}
                    </NavLink> */}
                    </>
                }
                
                
                {
                    localStorage.getItem('user-info') ?
                    <>
                    <NavLink className="nav-link" to="/main">
                    {user.name} {user.surname}
                    </NavLink>
                    </>
                    :null
                }
            
            </div>
        )
    
}

export default Header;