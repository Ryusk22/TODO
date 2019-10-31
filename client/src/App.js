import React, { Component } from 'react';
import HeaderMiddle from './components/HeaderMiddle'
import Header from './components/Header'
import Task from './components/Task'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import CompTask from './components/CompTask'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <HeaderMiddle />
          <Switch>
            <Route path="/task" component={Task} />
            <Route path="/comptask" component={CompTask} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
