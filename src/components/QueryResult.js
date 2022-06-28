import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
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
});

function QueryResult(props) {
  const { results, loading } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {loading ? (
        <>
          <CircularProgress style={{ color: '#FF5151' }} />
        </>
      ) : (
        <>
          {results.length === 0 ? (
            <Typography className={classes.subText}>
              <i>
                {' '}
                No data :( <br></br> Please make a Query !
              </i>
            </Typography>
          ) : (
            <>
              {results.map((item, i) => (
                <NewsCard
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
