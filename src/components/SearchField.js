import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  FormControl,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Card,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '40%',
    padding: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 0',
    borderRadius: '0.5rem',
  },
  input: {
    width: '100%',
    fontSize: '20px',
  },
  btn: {
    margin: '0 0.5rem',
    backgroundColor: '#FF5151',
    '&:hover': {
      backgroundColor: '#FF5151',
      boxShadow: 'none',
    },
    color: 'white',
  },
});

function SearchField(props) {
  const { onClickhandler, onFieldChangeHandler, query } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <FormControl
        size="small"
        fullwidth="true"
        className={classes.input}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-input">Search</InputLabel>
        <OutlinedInput
          size="small"
          id="outlined"
          value={query}
          onChange={(e) => onFieldChangeHandler(e.target.value)}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={60}
          placeholder="Type Search Keyword"
          InputProps={{
            className: classes.input,
          }}
        />
      </FormControl>
      <Button className={classes.btn} onClick={() => onClickhandler()}>
        Send
      </Button>
    </Card>
  );
}

export default SearchField;
