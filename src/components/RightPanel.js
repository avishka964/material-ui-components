import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
}));

const RightPanel = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      Right
    </Container>
  );
};

export default RightPanel;
