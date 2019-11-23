import React, { Component } from 'react';
import {  Button,
          TextField,
          Dialog,
          DialogActions,
          DialogContent,
          DialogTitle } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';


export default class EditTask extends Component {

  state = {
    open: false,
    title: "",
    content: "",
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  EditedTaskHandler = (id) => {
    this.handleToggle()
    axios.patch( 'http://localhost:3001/tasks/'+ id, {title: this.state.title, content: this.state.content})
    .then( this.props.showNewData );
  }

  // モーダルの開閉操作
  handleToggle = () => {
    this.setState({ open: !this.state.open, 
                    title: this.props.title,
                    content: this.props.content});
  }

  render() {

    return (
      <div>
        <EditIcon 
          onClick={this.handleToggle}
        />
        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">TODOを編集</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="Title"
              name='title'
              label="タイトル"
              type="text"
              onChange={this.handleChange}
              defaultValue={this.props.title}
              fullWidth
            />
            <TextField
              margin="dense"
              id="Content"
              name='content'
              label="詳細"
              type="text"
              onChange={this.handleChange}
              defaultValue={this.props.content}
              multiline={true}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={ () => this.EditedTaskHandler(this.props.id) }
              color="primary"
              type="submit">
              完了
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
};
