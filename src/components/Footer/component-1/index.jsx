import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
export default () => {
    return (

        <Box sx={{ width: "100%", backgroundColor: "#3C3C3C"}}>
            <Container sx={{ padding: "5%" }}>
                <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Grid xs={12} md={7} sm={12} lg={7}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography sx={{ color: "#FFFFFF", fontSize: "32px", fontFamily: "sans-serif", fontWeight: "700" }}>
                                    Subscribe for a
                                </Typography>
                                <Typography sx={{ color: "#EFB710", fontSize: "32px", fontFamily: "sans-serif", fontWeight: "700", paddingLeft: "1%" }}>
                                    25% Discount
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography sx={{ color: "#B3B1A6",width:"80%", fontSize: "15px", fontFamily: "sans-serif", fontWeight: "500" }}>
                                Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={5} sm={12} lg={5}>
                        <Box sx={{display:"flex",flexDirection:"row"}}>
                            <input type="text" placeholder="Your E-mail" style={{width:"100%",fontSize:"16px",color:"#B3B1A6",padding:"3%"}}/>
                            <Button sx={{backgroundColor:"#FBB710",borderRadius:"0%",color:"#FFFF",fontSize:"13px",padding:"3%"}}>
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}
