import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import LoginPage from "./component/auth/LoginPage";
import  Work from "./component/pages/Work";
import Navbar from "./component/layout/Navbar";
import MobileContainer from "./component/layout/MobileContainer";
import Home from "./component/pages/Home";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Navbar/>
              <MobileContainer/>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/work" component={Work}/>

            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
