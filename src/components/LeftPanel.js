import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExitToApp, Help, Home, People, Share, Storefront, VideoLibrary } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    color: 'gray',
    backgroundColor:'#DAD0C2',
    position: 'sticky',
    top: 0,
    paddingTop: theme.spacing(10), 
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#fff',
      color: '#555',
      border: '1px solid #999'
    }    
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
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px'
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
    <Container className={classes.container}>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.items}>
        <People className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.items}>
        <VideoLibrary className={classes.icon} />
        <Typography className={classes.text}>Video Library</Typography>
      </div>
      <div className={classes.items}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.items}>
        <Share className={classes.icon} />
        <Typography className={classes.text}>Share</Typography>
      </div>
      <div className={classes.items}>
        <Help className={classes.icon} />
        <Typography className={classes.text}>Help</Typography>
      </div>
      <div className={classes.items}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default LeftPanel;
