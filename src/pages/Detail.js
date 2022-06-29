import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import { getSingleNews } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import userIcon from './../assets/author.svg';
import linkIcon from './../assets/link.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import CommentsCard from '../components/CommentsCard';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'calc(100vh - 60px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    width: '70%',
    height: 'calc(100vh - 250px)',
    border: '#FF5151 solid 0.5px',
    backgroundColor: '#222831',
    padding: '0.8rem',
    position: 'relative',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '39px',
    color: '#FF5151',
  },
  text: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '300',
  },
  bottom: {
    display: 'flex',
    width: '90%',
    bottom: '0',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0.8rem 0',
    position: 'absolute',
    bottom: 0,
  },
  img: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  commentsDiv: {
    width: '100%',
    height: 'calc(100vh - 500px)',
    display: 'flex',
    flexDirection: 'coloumn',
    flexWrap: 'wrap',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: '20px',
    color: '#FF5151',
  },
});
function Detail() {
  const classes = useStyles();
  const { objectID } = useParams();

  // States
  const [newsObject, setNewsObject] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchNewsObject();
  }, []);

  const fetchNewsObject = async () => {
    setLoading(true);
    try {
      const res = await getSingleNews(objectID);
      if (res.data && Object.keys(res.data).length > 0) {
        setNewsObject(res.data);
      } else {
        toast.error('No data for this ObjectID');
      }
    } catch (err) {
      toast.error('No Results For this Query !');
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {loading ? (
          <CircularProgress style={{ color: '#FF5151' }} />
        ) : (
          <>
            <Typography className={classes.title}>
              {newsObject?.title || ''}
            </Typography>
            <p className={classes.text}>
              <i>{newsObject?.text || 'No Text'}</i>
            </p>
            <Typography className={classes.heading}>Comments</Typography>
            <div className={classes.commentsDiv}>
              {newsObject?.children?.length > 0 ? (
                <>
                  {newsObject?.children.map((item, i) => (
                    <CommentsCard
                      text={
                        item?.text?.replace(/(&nbsp;|<([^>]+)>)/gi, '') || ''
                      }
                      author={item.author}
                    />
                  ))}
                </>
              ) : (
                <p className={classes.text}>
                  <i>No Comments</i>
                </p>
              )}
            </div>
            <div className={classes.bottom}>
              <Typography
                style={{
                  justifyContent: 'cenetr',
                  alingItems: 'center',
                  display: 'flex',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                <img
                  src={userIcon}
                  style={{
                    width: '25px',
                    height: '25px',
                    marginRight: '0.5rem',
                  }}
                />
                by {newsObject?.author}
              </Typography>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}

export default Detail;
