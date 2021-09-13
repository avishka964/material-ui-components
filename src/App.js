import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import LeftPanel from './components/LeftPanel';
import Feed from './components/Feed';
import RightPanel from './components/RightPanel';
import AddPosts from './components/AddPosts';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
  }
}));


const App = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container> 
        <Grid item sm={2} xs={2}>
          <LeftPanel />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightPanel />
        </Grid>
      </Grid>
      <AddPosts />
    </div>
  );
}

export default App;
