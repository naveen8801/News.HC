import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '60px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 2rem',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    fontSize: '29px',
    color: '#FF5151',
  },
  span: {
    fontFamily: 'Montserrat',
    fontWeight: '900',
    fontSize: '25px',
    color: 'white',
  },
  subText: {
    fontFamily: 'Montserrat',
    fontWight: '600',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
  },
});

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        News<span className={classes.span}>.HC</span>
      </Typography>
      <Typography className={classes.subText}>
        Get Latest Hacker News Here !
      </Typography>
    </div>
  );
}

export default NavBar;
