import React from 'react';
import {  AppBar,
          Toolbar,
          Typography,
          Button,
          IconButton,
          Avatar,
          makeStyles  } from '@material-ui/core';
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
