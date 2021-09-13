import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
  Tooltip,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Add } from '@material-ui/icons';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 10,
    right: 10,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  grid: {
    margin: theme.spacing(1),
  },
}));

const AddPosts = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState('Private');
  const [value, setValue] = useState('Every One');
  const [alert, setAlert] = useState(false);

  const handleSelectChange = (event) => {
    setVisibility(event.target.value);
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setAlert(true);
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  return (
    <Fragment>
      <Tooltip title='Add' aria-label='add' onClick={() => setOpen(true)}>
        <Fab color='secondary' className={classes.fab}>
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete='off'>
            <Grid className={classes.grid}>
              <TextField
                fullWidth
                id='outlined-basic'
                label='Title'
                variant='outlined'
              />
            </Grid>
            <Grid className={classes.grid}>
              <TextField
                fullWidth
                id='outlined-basic'
                label='Description'
                multiline
                rows={5}
                variant='outlined'
              />
            </Grid>
            <Grid className={classes.grid}>
              <FormControl variant='outlined' fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Age
                </InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  label='Age'
                  value={visibility}
                  onChange={handleSelectChange}
                >
                  <MenuItem value='Public'>Public</MenuItem>
                  <MenuItem value='Private'>Private</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid className={classes.grid}>
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Who can comment?</FormLabel>
                <RadioGroup
                  name='comment'
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value='Every One'
                    control={<Radio size='small' />}
                    label='Every One'
                  />
                  <FormControlLabel
                    value='Only Friends'
                    control={<Radio size='small' />}
                    label='Only Friends'
                  />
                  <FormControlLabel
                    value='No One'
                    control={<Radio size='small' />}
                    label='No One'
                  />
                  <FormControlLabel
                    value='Custom'
                    disabled
                    control={<Radio size='small' />}
                    label='Custom (Premium)'
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid className={classes.grid}>
              <Button
                variant='contained'
                color='primary'
                style={{ marginRight: 20 }}
                onClick={handleClick}
              >
                Create
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={alert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleClose} severity='success'>
          Post successfully created!
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default AddPosts;
