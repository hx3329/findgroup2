import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import LoginPage from "./component/auth/LoginPage";
import  Work from "./component/pages/Work";
import Home from "./component/pages/Home";
import Layout from "./component/layout/Layout";



class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
              <Layout>
                  <Switch>
                     <Route path="/" exact={true} component={Home}/>
                     <Route path="/login" component={LoginPage}/>
                     <Route path="/work" component={Work}/>
                  </Switch>
              </Layout>
          </div>
        </Router>
    );
  }
}

export default App;
