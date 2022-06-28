import React from 'react';
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function routes() {
  return [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/detail/:objectID',
      element: <Detail />,
    },
    { path: '*', element: <NotFound /> },
  ];
}

export default routes;
