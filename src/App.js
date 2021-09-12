import React from 'react';
import { Grid } from '@material-ui/core';
import NavBar from './components/NavBar';
import LeftPanel from './components/LeftPanel';
import Feed from './components/Feed';
import RightPanel from './components/RightPanel';


const App = () => {
  return (
    <div>
      <NavBar />
      <Grid container> 
        <Grid item sm={2}>
          <LeftPanel />
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <RightPanel />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
