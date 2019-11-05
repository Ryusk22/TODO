import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction, Badge } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

const HeaderMiddle = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
      label={
        <Badge className={classes.padding} color="secondary" badgeContent={4}>
          TODO
        </Badge>
      }
      icon={<PlaylistAddIcon />} 
      component={Link}
      to="/task"
      className={classes.content}
      />
      <BottomNavigationAction
      label="COMPLETED"
      icon={<PlaylistAddCheckIcon />}
      component={Link}
      to="/comptask"
      className={classes.content}
      />
    </BottomNavigation>
  );
}

export default HeaderMiddle;
