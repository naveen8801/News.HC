import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchField from '../components/SearchField';
import { Typography } from '@material-ui/core';
import QueryResult from '../components/QueryResult';

const useStyles = makeStyles({
  root: {
    // backgroundColor: '#222831',
    width: '100%',
    height: 'calc(100vh - 60px)',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    width: '90%',
    height: 'calc(100vh - 220px)',
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

function Home() {
  const classes = useStyles();

  // State
  const [queryText, setQuerytext] = useState('');
  const [results, setResults] = useState([]);

  const onFieldChangeHandler = (val) => {
    setQuerytext(val);
  };

  const onClickSendBtnHandler = () => {
    console.log(queryText);
  };

  return (
    <div className={classes.root}>
      <SearchField
        onClickhandler={onClickSendBtnHandler}
        onFieldChangeHandler={onFieldChangeHandler}
        query={queryText}
      />
      <div className={classes.content}>
        <QueryResult results={results} />
      </div>
    </div>
  );
}

export default Home;
