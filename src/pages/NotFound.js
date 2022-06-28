import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'calc(100vh - 60px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    fontSize: '29px',
    color: '#FF5151',
  },
  subtext: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '39px',
    color: 'white',
  },
});

function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>404</Typography>
      <Typography className={classes.subtext}>Not Found !!</Typography>
    </div>
  );
}

export default NotFound;
