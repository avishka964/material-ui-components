import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    sloganLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
    },
    sloganSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },


}));


const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.sloganLg}>
                    Material-UI
                </Typography>
                <Typography variant="h6" className={classes.sloganSm}>
                    M-UI
                </Typography>
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder="Search…" />
                </div>
                icons
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
