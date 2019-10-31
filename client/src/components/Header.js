import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar className={classes.avatar}>RY</Avatar>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TODO
          </Typography>
          <Link to='/signin'>          
            <Button variant="contained" size="small" color="primary">Sign In</Button>
          </Link>
          <Button variant="contained" size="small" color="primary">Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;