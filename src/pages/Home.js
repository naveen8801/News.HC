import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';

const useStyles = makeStyles({
  root: {
    // backgroundColor: '#222831',
    width: '100%',
    height: '100vh',
  },
});

function Home() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}

export default Home;
