import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CompTask = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ガンダムにクリエイティブメモを貰う</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <ExpansionPanelActions className={classes.root}>
            <Button size="small" color="primary">
              <KeyboardReturnIcon/>
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
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>傘を従業員3000人分コンビニで買う</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <ExpansionPanelActions className={classes.root}>
            <Button size="small" color="primary">
              <KeyboardReturnIcon/>
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

export default CompTask;
