import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '250px',
    height: '350px',
    display: 'flex',
    margin: '0.7rem',
  },
});

function NewsCard(props) {
  const classes = useStyles();
  return <Card className={classes.root}>NewsCard</Card>;
}

export default NewsCard;
