import React, { Component } from 'react';
import {  Fab,
          Button,
          TextField,
          Dialog,
          DialogActions,
          DialogContent,
          DialogTitle } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';


export default class CreateTask extends Component {

  state = {
    open: false,
    title: "",
    content: "",
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, });
    console.log(this.state)
  }

  handleSubmit = () => {
    this.handleToggle()

    const task = {
      title: this.state.title,
      content: this.state.content,
    }

    axios.post('http://localhost:3001/tasks', { task })
    .then(response => {
      this.props.fetchNewData()
    });
  }

  // モーダルの開閉操作
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {

    return (
      <div>
        <Fab
        style={{position:"fixed", right:"10%", bottom:50, zIndex:1}}
        color="primary"
        onClick={this.handleToggle}>
          <AddIcon />
        </Fab>
        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">TODOを入力</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="Title"
              name='title'
              label="タイトル"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="Content"
              name='content'
              label="詳細"
              type="text"
              onChange={this.handleChange}
              multiline={true}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={ this.handleSubmit  }
              color="primary"
              type="submit">
              作成
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
};
