import React, { Component } from 'react';
import CompTask from './CompTask';
import axios from 'axios';

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

  IncompletedTaskHandler = (id) => {
    axios.patch( 'http://localhost:3001/tasks/'+ id, {is_completed: false})
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
    // タスク完了のみレンダーする
    const tasks = this.state.tasks.reverse().map(task => {
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
      </div>
    );
  }
}

export default CompTaskList;
