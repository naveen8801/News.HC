import React from 'react';
import Detail from './pages/Detail';
import Home from './pages/Home';

function routes() {
  return [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/detail',
      element: <Detail />,
    },
  ];
}

export default routes;
