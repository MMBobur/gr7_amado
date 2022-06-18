import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';
// import Shop from "../components/Shop"
export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      // { path: '/shop', element: <Shop /> },

      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
