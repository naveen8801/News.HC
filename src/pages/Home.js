import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchField from '../components/SearchField';
import { Typography } from '@material-ui/core';
import QueryResult from '../components/QueryResult';
import { getQueryResults } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import NewsCard from '../components/NewsCard';

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

const keywords = ['Laptop', 'USA', 'IAS', 'RAW', 'NSA', 'ISRO'];

function Home() {
  const classes = useStyles();

  // State
  const [queryText, setQuerytext] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFieldChangeHandler = (val) => {
    setQuerytext(val);
  };

  const onClickSendBtnHandler = async () => {
    setLoading(true);
    if (queryText.trim().length === 0) {
      toast.error('Type a Valid Query');
    } else {
      try {
        const { data } = await getQueryResults(queryText);
        if (data.hits && data.hits.length > 0) {
          setResults(data.hits);
        } else {
          toast.error('No Results For this Query !');
        }
      } catch (error) {
        toast.error('No Results For this Query !');
      }
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <SearchField
        onClickhandler={onClickSendBtnHandler}
        onFieldChangeHandler={onFieldChangeHandler}
        query={queryText}
      />
      <div className={classes.content}>
        <QueryResult
          setQuerytext={setQuerytext}
          keywords={keywords}
          loading={loading}
          results={results}
        />
      </div>
    </div>
  );
}

export default Home;
