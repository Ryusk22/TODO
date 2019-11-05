import React, { Component } from 'react';
import {  Fab,
          Button,
          TextField,
          Dialog,
          DialogActions,
          DialogContent,
          DialogContentText,
          DialogTitle } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


export default class CreateTask extends Component {

  state = {
    open: false
  }

  // モーダルの開閉操作
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {

    return (
      <div>
        <Fab
        style={{position:"fixed", right:"10%", bottom:50}}
        color="primary"
        onClick={this.handleToggle}>
          <AddIcon />
        </Fab>
        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">TODOを入力</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="Title"
              label="タイトル"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="Content"
              label="詳細"
              type="email"
              multiline="true"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              作成
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
};
