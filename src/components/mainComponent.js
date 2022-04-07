import React, { Component } from 'react';
import Main from './mainPage';
import Header from './header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/main" component={() => <Main />} />
                    {/* <Route exact path="/about" component={() => <About />} /> */}
                    {/* <Redirect to="/home" /> */}
                </Switch>
            </div>
        );
    }
}
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default MainComponent;


