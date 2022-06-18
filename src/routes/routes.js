import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Checkout from '../views/Checkout';
import Home from '../containers/Home';
// import Shop from "../components/Shop"
export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
<<<<<<< HEAD
      { path: '/users', element: <Users /> },
      { path: '/checks', element: <Checkout /> },
=======
      // { path: '/shop', element: <Shop /> },

>>>>>>> master
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
