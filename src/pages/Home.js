import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import SearchField from '../components/SearchField';

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
});

function Home() {
  const classes = useStyles();

  // State
  const [queryText, setQuerytext] = useState('');

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
    </div>
  );
}

export default Home;
