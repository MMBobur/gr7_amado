import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material/";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import visa from './asset/download.webp'
import Button from '@mui/material/Button'

const currencies = [
  {
    value: "USD",
    label: "United Kingdom",
  },
  {
    value: "EUR",
    label: "United states",
  },
  {
    value: "BTC",
    label: "German",
  },
  {
    value: "JPY",
    label: "France",
  },
  {
    value: "JPY",
    label: "India",
  },
  {
    value: "JPY",
    label: "Australia",
  },
  {
    value: "JPY",
    label: "Brazil",
  },
  {
    value: "JPY",
    label: "Canada",
  },
];
function Checkout() {
  const [currency, setCurrency] = React.useState("EUR");

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <>
      <Container>
        <Typography mt="10%" sx={{ fontFamily: 'inherit' ,color:'#242424',fontSize:'30px'}}>
          Checkout
        </Typography>
        <Grid mt='2%' container>
          <Grid
            md={10}
            lg={8}
            sm={8}
            xl={8}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box component="form" noValidate autoComplete="off">
                <FormControl
                  sx={{ width: "27.7ch", backgroundColor: "#F5F7FA" }}
                >
                  <OutlinedInput
                    placeholder="First name"
                    sx={{ borderRadius: "0px ", height: "4ch" }}
                  />
                </FormControl>
              </Box>
              <Box ml="3%" component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: "28ch", backgroundColor: "#F5F7FA" }}>
                  <OutlinedInput
                    placeholder="Last name"
                    sx={{ borderRadius: "0px", height: "4ch" }}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid>
              <Box
                mt="2%"
                pr="2.2%"
                component="form"
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ width: "100%", backgroundColor: "#F5F7FA" }}>
                  <OutlinedInput
                    placeholder="Company name"
                    sx={{ borderRadius: "0px", height: "4ch" }}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid>
              <Box
                mt="2%"
                pr="2.2%"
                component="form"
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ width: "100%", backgroundColor: "#F5F7FA" }}>
                  <OutlinedInput
                    placeholder="Email"
                    sx={{ borderRadius: "0px", height: "4ch" }}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid>
              <Box mr="2.2%" mt="2%">
                <TextField
                  sx={{ width: "100%", backgroundColor: "#F5F7FA" }}
                  select
                  value={currency}
                  onChange={handleChange}
                >
                  {currencies.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      sx={{ borderRadius: "0px" }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Grid>

            <Grid>
              <Box
                mt="2%"
                pr="2.2%"
                component="form"
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ width: "100%", backgroundColor: "#F5F7FA" }}>
                  <OutlinedInput
                    placeholder="Address"
                    sx={{ borderRadius: "0px", height: "4ch" }}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid>
              <Box
                mt="2%"
                pr="2.2%"
                component="form"
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ width: "100%", backgroundColor: "#F5F7FA" }}>
                  <OutlinedInput
                    placeholder="Town"
                    sx={{ borderRadius: "0px", height: "4ch" }}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid
              mt="2%"
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box component="form" noValidate autoComplete="off">
                <FormControl
                  sx={{ width: "27.7ch", backgroundColor: "#F5F7FA" }}
                >
                  <OutlinedInput
                    placeholder="Zip Code"
                    sx={{ borderRadius: "0px ", height: "4ch" }}
                  />
                </FormControl>
              </Box>
              <Box ml="3%" component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: "28ch", backgroundColor: "#F5F7FA" }}>
                  <OutlinedInput
                    placeholder="Phone no"
                    sx={{ borderRadius: "0px", height: "4ch" }}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid mt="2%">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                placeholder="Leave comment about your order"
                style={{ width: 454, backgroundColor: "#F5F7FA", pt: "5%" }}
              />
            </Grid>
            <Grid>
              <FormControl component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={handleChange}
                        name="jason"
                      />
                    }
                    label="Create an account"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={handleChange}
                        name="antoine"
                      />
                    }
                    label="Ship to a different address"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            md={4}
            lg={4}
            sm={4}
            xl={4}
            sx={{ backgroundColor: "#F5F7FA",height:'350px' }}
          >
            <Grid pl="4%" pt='7%'>
              <Typography sx={{fontSize:'18px',color:'#242424',fontWeight:400}}>Card Total</Typography>

              <Typography
              mt='6%'
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{fontSize:'14px',color:'#6b6b6b',fontFamily:"helveticaneuemedium"}}>Subtotal:</Typography>
                <Typography mr="2%" sx={{fontSize:'14px',color:'#6b6b6b',fontFamily:"helveticaneuemedium"}}>$140.00</Typography>
              </Typography>

              <Typography
              mt='5%'
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{fontSize:'14px',color:'#6b6b6b',fontFamily:"helveticaneuemedium"}}>Delivery:</Typography>
                <Typography mr="2%" sx={{fontSize:'14px',color:'#6b6b6b',fontFamily:"helveticaneuemedium"}}>Free</Typography>
              </Typography>

              <Typography
              mt='5%'
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{fontSize:'14px',color:'#6b6b6b',fontFamily:"helveticaneuemedium"}}>Total</Typography>
                <Typography mr="2%" sx={{fontSize:'14px',color:'#6b6b6b',fontFamily:"helveticaneuemedium"}}>$140.00</Typography>
              </Typography>

              <Box 
              mt='5%'
              >
                <FormControl component="fieldset" variant="standard">
                  <FormGroup>
                    <FormControlLabel
                    
                      control={
                        <Checkbox
                        disableRipple
                          checked={jason}
                          onChange={handleChange}
                          name="jason"
                          sx={{boxShadow:'none'}}
                        />
                      }
                      label="Cash on Delivery"
                    />
                    <Grid sx={{display:'flex',flexDirection:'row'}}>
                    <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                        disableRipple
                          checked={antoine}
                          onChange={handleChange}
                          name="antoine"
                        />
                      }
                      label="Paypal"
                    />
                    </div>
                    <div style={{display:'flex',alignItems:'center'}}>
                     <img src={visa} alt=''/>
                    </div>
                    </Grid>
                  </FormGroup>
                </FormControl>
              </Box>

            <Box pr='4%' mt='10%' sx={{display:'flex',justifyContent:'center'}}>
            <Button  sx={{width:'100%',backgroundColor:'#F8B510',border:'1px solid #F8B510',borderRadius:'0px',color:'white'}}>
                Checkout
              </Button>
            </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Checkout;
