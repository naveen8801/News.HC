import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import moment from 'moment';
import userIcon from './../assets/author.svg';
import linkIcon from './../assets/link.svg';
import { useNavigate, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    padding: '0.5rem',
    width: '250px',
    height: '250px',
    display: 'flex',
    margin: '0.7rem',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '#FF5151 0px 3px 3px 0px',
    },
  },
  link: {
    textDecoration: 'none',
  },
  title: { fontFamily: 'Poppins', fontWeight: '900', fontSize: '15px' },
  time: {
    fontSize: '14px',
    color: 'grey',
  },
  bottom: {
    display: 'flex',
    position: 'absolute',
    width: '90%',
    bottom: '0',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0.5rem 0',
  },
  img: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

function NewsCard(props) {
  const { url, title, created_at, text, author, id } = props;
  let navigate = useNavigate();
  const classes = useStyles();
  return (
    <Link className={classes.link} to={`..//detail/${id}`}>
      <Card className={classes.root}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.time}>
          <i> {moment().fromNow(created_at)}</i>
        </Typography>
        <p>{text.trim().length > 0 ? text : <i>No text</i>}</p>
        <div className={classes.bottom}>
          <Typography
            style={{
              justifyContent: 'cenetr',
              alingItems: 'center',
              display: 'flex',
            }}
            className={classes.time}
          >
            <img src={userIcon} style={{ width: '23px', height: '23px' }} />
            {author}
          </Typography>
          <Typography
            style={{
              justifyContent: 'center',
              alingItems: 'center',
              display: 'flex',
            }}
            className={classes.time}
          >
            <img
              className={classes.img}
              src={linkIcon}
              style={{ width: '23px', height: '23px' }}
              onClick={() => {
                window.open(url, '_blank');
              }}
            />
          </Typography>
        </div>
      </Card>
    </Link>
  );
}

export default NewsCard;
