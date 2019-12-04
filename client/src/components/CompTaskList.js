import React, { Component } from 'react';
import CompTask from './CompTask';
import axios from 'axios';
import CreateTask from './CreateTask';

class CompTaskList extends Component {
  
  state = {
    tasks: []
  }
  componentDidMount () {
    axios.get('http://localhost:3001/tasks')
         .then(response => {
           this.setState({ tasks: response.data });
         });
  }

  showNewData = () => {
    axios.get('http://localhost:3001/tasks')
    .then(response => {
      this.setState({ tasks: response.data });
    })
  };

  IncompletedTaskHandler = (id) => {
    axios.patch( 'http://localhost:3001/tasks/'+ id, {is_completed: false})
    .then( this.showNewData );
  }

  DeleteTaskHandler = (id) => {
    axios.delete( 'http://localhost:3001/tasks/'+ id)
    .then( this.showNewData );
  }

  render(){
    // タスク完了のみレンダーする
    const tasks = this.state.tasks.sort((a, b) => {   
      return a.id > b.id ? -1 : 1 }).map(task => {
      return task.is_completed 
      ? <CompTask
          title={task.title}
          content={task.content}
          key={task.id}
          clicked={ () =>this.IncompletedTaskHandler(task.id)}
          deleteClicked={ () => this.DeleteTaskHandler(task.id)} />
      : null
    });
    return (
      <div>
        {tasks}
        <CreateTask showNewData={this.showNewData.bind(this)}/>
      </div>
    );
  }
}

export default CompTaskList;
