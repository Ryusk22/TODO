import React, { Component } from 'react';
import Task from './Task';
import axios from 'axios';
import CreateTask from './CreateTask';

class TaskList extends Component {
  
  state = {
    tasks: []
  }

  componentDidMount = () => {
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

  CompletedTaskHandler = (id) => {
    axios.patch( 'http://localhost:3001/tasks/'+ id, {is_completed: true})
    .then( this.showNewData );
  }

  fetchNewData = () => {
    this.showNewData()
    console.log("成功")
  }

  DeleteTaskHandler = (id) => {
    axios.delete( 'http://localhost:3001/tasks/'+ id)
    .then( this.showNewData );
  }

  render(){
    // タスク未完了のみレンダーする
    const tasks = this.state.tasks.map(task => {
      return task.is_completed 
      ? null
      : <Task 
          title={task.title}
          content={task.content}
          key={task.id}
          completedClicked={ () => this.CompletedTaskHandler(task.id)}
          deleteClicked={ () => this.DeleteTaskHandler(task.id)} />
    });
    return (
      <div>
        {tasks}
        <CreateTask fetchNewData={this.fetchNewData}/>
      </div>
    );
  }
}

export default TaskList;
