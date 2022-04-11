import React, { Component } from 'react';
import Main from './mainPage';
import Header from './header';
import { Switch, Route, Redirect, withRouter, Routes } from 'react-router-dom';
import Login from './login';
import About from './about';

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route exact path="/about" component={() => <About />} /> */}
                    {/* <Redirect to="/home" /> */}
                </Routes>
            </div>
        );
    }
}
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default MainComponent;


