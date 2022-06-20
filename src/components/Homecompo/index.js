import { ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'
import './Homecompo.css'





const data =[
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x1.jpg.pagespeed.ic.5ZA1VvUQdq.webp',
        title:'From $180',
        author:'Modern Chair',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x5.jpg.pagespeed.ic.AjrZ_RWLlg.webp',
        title:'From $18',
        author:'Plant Pot',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x8.jpg.pagespeed.ic.AdKZHLNWPP.webp',
        title:'From $318',
        author:'Modern Rocking Chair',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x2.jpg.pagespeed.ic.a65WvD6Lfq.webp',
        title:'From $180',
        author:'Minimalistic Plant Pot',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x6.jpg.pagespeed.ic.IgZVpvJ9PH.webp',
        title:'From $320',
        author:'Small Table',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x9.jpg.pagespeed.ic.BhFC9o0jid.webp',
        title:'From $318',
        author:'Home Deco',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x3.jpg.pagespeed.ic.ZkaNwNeAkh.webp',
        title:'From $180',
        author:'Modern Chair',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x4.jpg.pagespeed.ic.ulQ6gNkSAS.webp',
        title:'From $180',
        author:'Night Stand',
    },
    {
        img:'https://preview.colorlib.com/theme/amado/img/bg-img/x7.jpg.pagespeed.ic.o4cGGg_r1m.webp',
        title:'From $318',
        author:'Metallic Chair',
    },
]


const index = () => {
  return (
      <>
    <div className='gallery'>
        {data.map((x,i)=>{
            return(
                <div className='pics' key={i} >
                    <ImageListItem key={x.img}>
                    <Typography sx={{position:'absolute',m:3}} >
                        <Typography sx={{border:'2px solid #FBB710',mt:2,width:'50%'}} ></Typography>
                       <Typography sx={{color:'#777777',fontWeight:'700',mt:1}} >{x.title}</Typography> 
                       <Typography variant='h5' sx={{fontWeight:'700'}} >{x.author}</Typography> 
                    </Typography>
            <img
              alt={x.title}
              loading="lazy"
              src={x.img}
              className='img'
            />
            {/* <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, ' +
                  'rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={x.title}
              subtitle={x.author}
              position="top"
           
              actionPosition="left"
            ></ImageListItemBar> */}
          </ImageListItem>
                </div>
            )
        })}
    </div>
      </>
  )
}

export default index