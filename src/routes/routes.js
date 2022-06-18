import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Checkout from '../views/Checkout';
import Home from '../containers/Home/Homes';
import Shop from "../components/Shop"
import Product from "../components/Product"
import Card from "../components/Card"
export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '/product', element: <Product/> },
      { path: '/card', element: <Card/> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/shop', element: <Shop /> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
