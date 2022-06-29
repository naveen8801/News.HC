import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import userIcon from './../assets/author.svg';
const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    padding: '0.5rem',
    width: '100%',
    minheight: '100px',
    display: 'flex',
    margin: '0.6rem',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
    //   cursor: 'pointer',
      boxShadow: '#FF5151 0px 3px 3px 0px',
    },
  },
  author: { fontFamily: 'Poppins', fontWeight: '900', fontSize: '15px' },
  text: {
    fontSize: '14px',
    color: 'grey',
  },
  img: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

function CommentsCard(props) {
  const classes = useStyles();
  const { author, text } = props;
  return (
    <Card className={classes.root}>
      <Typography
        style={{
          justifyContent: 'cenetr',
          alingItems: 'center',
          display: 'flex',
        }}
        className={classes.author}
      >
        <img src={userIcon} style={{ width: '23px', height: '23px' }} />
        {author?.trim().length > 0 ? `by ${author}` : 'No Author'}
      </Typography>
      <p className={classes.text}>
        {text?.trim().length > 0 ? text?.trim() : 'No Comment'}
      </p>
    </Card>
  );
}

export default CommentsCard;
