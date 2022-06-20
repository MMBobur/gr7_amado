import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Homecompo from "../../../components/Homecompo"
import Grid from '@mui/material/Grid';


const data =[
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x1.jpg.pagespeed.ic.5ZA1VvUQdq.webp',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x2.jpg.pagespeed.ic.a65WvD6Lfq.webp',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x3.jpg.pagespeed.ic.ZkaNwNeAkh.webp',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x5.jpg.pagespeed.ic.AjrZ_RWLlg.webp',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x6.jpg.pagespeed.ic.IgZVpvJ9PH.webp',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x4.jpg.pagespeed.ic.ulQ6gNkSAS.webp',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x8.jpg.pagespeed.ic.AdKZHLNWPP.webp',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x9.jpg.pagespeed.ic.BhFC9o0jid.webp',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x7.jpg.pagespeed.ic.o4cGGg_r1m.webp',
    },
]


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Homecompo/>
      {/* <Grid container spacing={2}>
          {data.map((x)=>{
              return (

                <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box>
                    <img  style={{width:'100%'}} src={x.img} />
                </Box>
              </Grid>
          )})}
 
      </Grid> */}
    </Box>
  );
}
