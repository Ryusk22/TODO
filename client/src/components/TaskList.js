import React, { Component } from 'react';
import Task from './Task';
import axios from 'axios';

class TaskList extends Component {
  
  state = {
    tasks: [],
  }
  componentDidMount () {
    axios.get('http://localhost:3001/tasks')
         .then(response => {
           this.setState({ tasks: response.data });
         });
  }

  CompletedTaskHandler = (id) => {
    axios.patch( 'http://localhost:3001/tasks/'+ id, {is_completed: true})
    .then(response => {
      // 新しいデータ情報をビューに反映
      axios.get('http://localhost:3001/tasks')
      .then(response => {
        this.setState({ tasks: response.data });
      });
    });
  }

  DeleteTaskHandler = (id) => {
    axios.delete( 'http://localhost:3001/tasks/'+ id)
    .then(response => {
      // 新しいデータ情報をビューに反映
      axios.get('http://localhost:3001/tasks')
      .then(response => {
        this.setState({ tasks: response.data });
      });
    });
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
      </div>
    );
  }
}

export default TaskList;
