import React, { Component } from 'react';
import Task from './Task';
import axios from 'axios';
import CreateTask from './CreateTask';

class TaskList extends Component {
  
  state = {
    tasks: []
  }

  componentDidMount = () => {
    axios.get('http://localhost:3001/tasks',
          { params: {
                complete: false
          }}
          )
         .then(response => {
           this.setState({ tasks: response.data });
           console.log("conponentDidMount")
         });
  }

  showNewData = () => {
    console.log(this)
    axios.get('http://localhost:3001/tasks',
              { params: {
                complete: false
          }}
          )
    .then(response => {
      this.setState({ tasks: response.data });
    })
  };

  completedTaskHandler = (id) => {
    axios.patch( 'http://localhost:3001/tasks/'+ id, {is_completed: true})
    .then( this.showNewData );
  }

  deleteTaskHandler = (id) => {
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
          id={task.id}
          completedClicked={ () => this.completedTaskHandler(task.id)}
          deleteClicked={ () => this.deleteTaskHandler(task.id)} 
          // 新しいデータを表示するメソッドを渡す
          showNewData={ this.showNewData.bind(this) }
        />
    });
    return (
      <div>
        {tasks}
        <CreateTask showNewData={this.showNewData.bind(this)}/>
      </div>
    );
  }
}

export default TaskList;
