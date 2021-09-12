import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Notifications, Mail, Search, Close } from '@material-ui/icons';
import Profile from '../assets/avatar.jpg';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',    
  },
  sloganLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sloganSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '70%',
    },
  },
  inputBase: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
        display: 'none'       
      },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    display: 'flex',  
  },
  icons: {
    display: (props) => (props.open ? 'none' : 'flex'),
    alignItems: 'center',
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.sloganLg}>
          Material-UI
        </Typography>
        <Typography variant='h6' className={classes.sloganSm}>
          M-UI
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase placeholder='Search…' className={classes.inputBase} />
            <Close className={classes.cancel} onClick={()=> setOpen(false)}/>
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='secondary' className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt='Emmy Sharp' src={Profile} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
