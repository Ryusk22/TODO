import React from 'react';
import {  ExpansionPanel,
          ExpansionPanelSummary,
          ExpansionPanelDetails,
          ExpansionPanelActions,
          Checkbox,
          FormControlLabel,
          Typography,
          Button,
          Divider  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Task = (props) => {
  
  return (
    <ExpansionPanel 
      style={{width: "80%",
              margin: "auto",
              marginBottom: "0.5em"}}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
      <FormControlLabel
        value="bottom"
        control={<Checkbox onClick={props.completedClicked} color="primary" />}
        label={<Typography color="textSecondary">DONE</Typography>}
        labelPlacement="bottom"
      />
        <Typography color="primary"  style={{width: "80%", margin: "auto"}}>
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
          <EditIcon/>
        </Button>
        <Button size="small" color="secondary">
          <DeleteIcon onClick={props.deleteClicked}/>
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};

export default Task;
