import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { getSingleNews } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'calc(100vh - 60px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
function Detail() {
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

  console.log(newsObject);

  return <div>Detail</div>;
}

export default Detail;
