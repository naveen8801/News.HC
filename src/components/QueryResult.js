import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default QueryResult;
