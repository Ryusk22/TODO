import React from 'react';
import {  ExpansionPanel,
          ExpansionPanelSummary,
          ExpansionPanelDetails,
          Typography,
          ExpansionPanelActions,
          Button,
          Divider  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import DeleteIcon from '@material-ui/icons/Delete';

const CompTask = (props) => {
  return (
      <ExpansionPanel 
          style={{width: "80%",
                  margin: "auto",
                  marginBottom: "0.5em"}} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography color={"primary"}>
            {props.title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography color="textSecondary">
            {props.content}
          </Typography>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">
            <KeyboardReturnIcon onClick={props.clicked}/>
          </Button>
          <Button size="small" color="secondary">
            <DeleteIcon onClick={props.deleteClicked}/>
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
  );
}

export default CompTask;
