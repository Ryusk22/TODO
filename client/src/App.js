import React, { Component } from 'react';
import HeaderMiddle from './components/HeaderMiddle'
import Header from './components/Header'
import TaskList from './components/TaskList'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import CompTaskList from './components/CompTaskList'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateTask from './components/CreateTask';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <HeaderMiddle />
          <Switch>
            <Route path="/task" component={TaskList} />
            <Route path="/comptask" component={CompTaskList} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createtask" component={CreateTask} />
          </Switch>
          <CreateTask/>
        </div>
      </Router>

    );
  }
}

export default App;
