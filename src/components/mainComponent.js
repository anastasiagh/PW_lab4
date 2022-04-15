import React, { Component } from 'react';
import Main from './mainPage';
import Header from './header';
import { Switch, Route, Redirect, withRouter, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Quiz from './quiz';
import Quizes from './quizzes';
import UserCheck from './userCheck';

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Login /> */}
                <Routes>
                    {/* <Navigate path="/login" element={< UserCheck Cmp={Login} />} /> */}
                    <Route path="/main" element={<UserCheck  Comp={Main} />} />
                    <Route path="/login" element={< UserCheck Comp={Login} />} />
                    <Route exact path="/quizzes" element={<UserCheck Comp={Quizes}/>} />
                    <Route path="/quizzes/:id" element={<UserCheck Comp={Quiz} />} />
    
                </Routes>
            </div>
        );
    }
}
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default MainComponent;


