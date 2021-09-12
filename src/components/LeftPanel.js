import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    color: 'gray',
    backgroundColor:'#F8F0DF',
    paddingTop: theme.spacing(3), 
    
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer',
    },
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  }
}));

const LeftPanel = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} boxShadow={2}>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
    </Container>
  );
};

export default LeftPanel;
