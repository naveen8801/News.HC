import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import NewsCard from './NewsCard';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'calc(100vh - 210px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  subText: {
    fontFamily: 'Montserrat',
    fontWight: '600',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
    flexWrap: 'wrap',
  },
  btn: {
    margin: '0.5rem',
    backgroundColor: '#FF5151',
    '&:hover': {
      backgroundColor: '#FF5151',
      boxShadow: 'none',
    },
    color: 'white',
  },
});

function QueryResult(props) {
  const { results, loading, keywords, setQuerytext } = props;
  const classes = useStyles();
  const randomButtonHandler = () => {
    var randomNumber = Math.floor(Math.random() * keywords.length);
    setQuerytext(keywords[randomNumber]);
  };
  return (
    <div className={classes.root}>
      {loading ? (
        <>
          <CircularProgress style={{ color: '#FF5151' }} />
        </>
      ) : (
        <>
          {results.length === 0 ? (
            <Typography
              style={{ display: 'flex', flexDirection: 'column' }}
              className={classes.subText}
            >
              <i>
                {' '}
                No data :( <br></br> Please search a keyword !
              </i>
              <Button onClick={randomButtonHandler} className={classes.btn}>
                Pick A Random Word
              </Button>
            </Typography>
          ) : (
            <>
              {results.map((item, i) => (
                <NewsCard
                  id={item.objectID}
                  url={item.url || ''}
                  title={item.title || ''}
                  created_at={item.created_at || ''}
                  text={item.text || ''}
                  key={i}
                  author={item.author}
                  data={item}
                />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default QueryResult;
