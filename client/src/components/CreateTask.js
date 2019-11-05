import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
