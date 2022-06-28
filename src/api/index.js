import axios from 'axios';

//url
const url = 'http://hn.algolia.com/api/v1/';

export const getQueryResults = (query) =>
  axios.get(`${url}search?query=${query}`);

export const getSingleNews = (id) => axios.get(`${url}items/${id}`);
