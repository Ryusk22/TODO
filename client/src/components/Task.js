import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: 'auto',
  },
  formControlStyle: {
    size: 10,
  },
});
const Task = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
          label={<Typography color="textSecondary">DONE</Typography>}
          labelPlacement="bottom"
        />
          <Typography color="primary"  className={classes.root}>
            コンビニでナゲットとポテトとハンバーガーを買う
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography color="textSecondary">
            The click event of the nested action will propagate up and expand the panel unless you
            explicitly stop it.
          </Typography>
          <ExpansionPanelActions　className={classes.root}>
            <Button size="small" color="primary">
              <EditIcon/>
            </Button>
            <Button size="small" color="secondary">
              <DeleteIcon/>
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
          label={<Typography color="textSecondary">DONE</Typography>}
          labelPlacement="bottom"
        />
          <Typography color="primary"  className={classes.root}>
            先生に明日遊べるかどうかを聞いて、交渉する
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography color="textSecondary">
            The click event of the nested action will propagate up and expand the panel unless you
            explicitly stop it.
          </Typography>
          <ExpansionPanelActions　className={classes.root}>
            <Button size="small" color="primary">
              <EditIcon/>
            </Button>
            <Button size="small" color="secondary">
              <DeleteIcon/>
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Task;