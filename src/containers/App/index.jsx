import React from 'react';

import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Sidebar from "../../components/Sidebar"
import Grid from "@mui/material/Grid"
import Footer from "../../components/Footer"
export default () => {
  const content = useRoutes(routes);
  return <>

  <Grid container>

  <Grid item md={2}>
  <Sidebar/>
  </Grid>
  <Grid item md={10}>
  {content}
  </Grid>
  </Grid>
  
    <Footer/>

  </>;
};
