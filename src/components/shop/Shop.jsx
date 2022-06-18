import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { dataList } from "./data/data";
import Rating from '@mui/material/Rating';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow:"none",
  background: "none",
}));

const Shop = () => {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [age2, setAge2] = React.useState("");
  const [open2, setOpen2] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const [value, setValue] = React.useState(5);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Item sx={{ backgroundColor: "#f5f7fa" }}>
              <Item>
                <Item
                  sx={{
                    width: "50%",
                    fontWeight: "700",
                    color: "#242424",
                    fontSize: "120%",
                  }}
                >
                  Catigories
                </Item>
                <Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "15px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    Chairs
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "15px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    Beds
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "15px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    Accesories
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "15px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    Furniture
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "15px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    Home Deco
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "15px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    Dressings
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "15px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    Tables
                  </Item>
                </Item>
              </Item>
              <Item>
                <Item
                  sx={{
                    width: "50%",
                    fontWeight: "700",
                    color: "#242424",
                    fontSize: "120%",
                  }}
                >
                  Brands
                </Item>
                <Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "10px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    {" "}
                    <Checkbox {...label} />
                    Amado
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "10px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    {" "}
                    <Checkbox {...label} />
                    Ikea
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "10px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    {" "}
                    <Checkbox {...label} />
                    Furniture Inc
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "10px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    {" "}
                    <Checkbox {...label} />
                    The factory
                  </Item>
                  <Item
                    sx={{
                      width: "60%",
                      textAlign: "left",
                      marginLeft: "20%",
                      fontSize: "100%",
                      padding: "10px 0px",
                      fontWeight: "560",
                      color: "#959595",
                    }}
                  >
                    {" "}
                    <Checkbox {...label} />
                    Artdeco
                  </Item>
                </Item>
              </Item>
              <Item>
                <Item
                  sx={{
                    width: "50%",
                    fontWeight: "700",
                    color: "#242424",
                    fontSize: "120%",
                  }}
                >
                  Colors
                </Item>
                <Item sx={{ display: "flex", justifyContent: "center" }}>
                  <Item>
                    <Avatar
                      sx={{
                        backgroundColor: "white",
                        boxShadow: "1px 1px 4px black",
                      }}
                      alt=" "
                      src="."
                    ></Avatar>
                  </Item>
                  <Item>
                    <Avatar
                      sx={{
                        backgroundColor: "#969696",
                        boxShadow: "1px 1px 4px black",
                      }}
                      alt=" "
                      src="."
                    ></Avatar>
                  </Item>
                  <Item>
                    <Avatar
                      sx={{
                        backgroundColor: "#030303",
                        boxShadow: "1px 1px 4px black",
                      }}
                      alt=" "
                      src="."
                    ></Avatar>
                  </Item>
                  <Item>
                    <Avatar
                      sx={{
                        backgroundColor: "#0315FF",
                        boxShadow: "1px 1px 4px black",
                      }}
                      alt=" "
                      src="."
                    ></Avatar>
                  </Item>
                </Item>
                <Item sx={{ display: "flex", justifyContent: "center" }}>
                  <Item>
                    <Avatar
                      sx={{
                        backgroundColor: "red",
                        boxShadow: "1px 1px 4px black",
                      }}
                      alt=" "
                      src="."
                    ></Avatar>
                  </Item>
                  <Item>
                    <Avatar
                      sx={{
                        backgroundColor: "yellow",
                        boxShadow: "1px 1px 4px black",
                      }}
                      alt=" "
                      src="."
                    ></Avatar>
                  </Item>
                  <Item>
                    <Avatar
                      sx={{
                        backgroundColor: "#F26E51",
                        boxShadow: "1px 1px 4px black",
                      }}
                      alt=" "
                      src="."
                    ></Avatar>
                  </Item>
                  <Item>
                    <Avatar
                      sx={{
                        backgroundColor: "#9A8777",
                        boxShadow: "1px 1px 4px black",
                      }}
                      alt=" "
                      src="."
                    ></Avatar>
                  </Item>
                </Item>
              </Item>
            </Item>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Item>
              <Grid container>
                <Grid xs={12}>
                  <Item sx={{ textAlign: "left" }}>SHOWING 1-8 0F 25</Item>
                </Grid>
                <Grid xs={12}  sm={6}>
                  <Item sx={{ textAlign: "left", display: "flex" }}>
                    <Item>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#F7B410" }}
                      >
                        <WidgetsRoundedIcon />
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "black" }}
                      >
                        <MenuIcon />
                      </Button>
                    </Item>
                  </Item>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Item
                    sx={{
                      justifyContent: "right",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Item>Sort by</Item>
                    <div
                      style={{ backgroundColor: "#f5f7fa", textAlign: "right" }}
                    >
                      <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          onChange={handleChange}
                          sx={{ height: "30px" }}
                        >
                          <MenuItem value={10}>Dates</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>popular</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <Item sx={{ marginLeft: "0" }}>view</Item>
                    <div
                      style={{ backgroundColor: "#f5f7fa", textAlign: "right" }}
                    >
                      <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open2}
                          onClose={handleClose2}
                          onOpen={handleOpen2}
                          onChange={handleChange2}
                          sx={{ height: "30px" }}
                        >
                          <MenuItem value={10}>12</MenuItem>
                          <MenuItem value={20}>24</MenuItem>
                          <MenuItem value={30}>48</MenuItem>
                          <MenuItem value={30}>96</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Item>
            <Item>
              <Grid container>
                {dataList.features.map((darr) => {
                  return (
                     <Grid xs={12} sm={12} md={6}>
                    <Item>
                      <Item>
                        <img src={darr.img} style={{width:"100%"}} alt="" />
                      </Item>
                      <Item><div style={{backgroundColor:"#F7B410",height:"6px",width:"30%"}}></div></Item>
                      <Item sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{color:"#F7B410",fontSize:"200%",fontWeight:"600"}}>{darr.price}</div>
                        <div><Rating name="read-only" value={value} readOnly size="small"/></div>
                      </Item>
                      <Item sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{color:"black",fontSize:"120%",fontWeight:"600"}}>{darr.name}</div>
                        <div><LocalGroceryStoreOutlinedIcon/></div>
                      </Item>
                    </Item>
                  </Grid>
                  )
                })}
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Shop;
