import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const rows = [
  {
    img:
      "https://preview.colorlib.com/theme/amado/img/bg-img/xcart1.jpg.pagespeed.ic.84UQLYLKqh.webp",
    name: "White Modern Chair",
    price: "$130",
    quantity: "Qty -1 +",
  },
  {
    img:
      "https://preview.colorlib.com/theme/amado/img/bg-img/xcart2.jpg.pagespeed.ic.gftAef9kj-.webp",
    name: "White Modern Chair",
    price: "$120",
    quantity: "Qty -1 +",
  },
  {
    img:
      "https://preview.colorlib.com/theme/amado/img/bg-img/xcart3.jpg.pagespeed.ic.mu8Jv14z61.webp",
    name: "Minimal Plant Pot",
    price: "$100",
    quantity: "Qty -1 +",
  },
];

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography variant='h4' sx={{textAlign:'start',pb:4,pt:5}}>Shopping Cart</Typography>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Item>
              <TableContainer>
                <Table sx={{ width: "100%" }} size="small">
                  <TableHead>
                    <TableRow sx={{ background: "#f5f7fa", marginTop: "20px" }}>
                      <TableCell></TableCell>
                      <TableCell sx={{ color: "#242424",fontWeight:'bold', fontSize: "15px" }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ color: "#242424",fontWeight:'bold', fontSize: "15px" }}>
                        Price
                      </TableCell>
                      <TableCell sx={{ color: "#242424",fontWeight:'bold', fontSize: "15px" }}>
                        Quantity
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ "&:last-child td, &:last-child th": {} }}
                      >
                        <TableCell component="th" scope="row">
                          <img 
                            style={{ width: "150px" }}
                            src={row.img}
                            alt=""
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            fontSize: { lg: "18px", xs: "13px" },
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            fontSize: { lg: "18px", xs: "17px" },
                          }}
                        >
                          {row.price}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            fontSize: { lg: "18px", xs: "13px" },
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: { lg: "18px", xs: "13px" },
                              border: "1px solid #f5f7fa",
                              padding: "6%",
                              bgcolor: "#f5f7fa",
                            }}
                          >
                            {row.quantity}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <>
              <Box sx={{ width: "90%", bgcolor: "#F5F7FA",pb:5 }}>
                <Container>
                  <Typography
                    variant="h4"
                    color="black"
                    sx={{ pt: 5, textAlign: "start" }}
                  >
                    Cart Total
                  </Typography>
                  <Typography>
                  </Typography>
                  <Grid container spacing={0}>
                    <Grid item xs={6} md={6}>
                      <>
                        <Typography sx={{textAlign:'start',color:'black',fontSize:'15px',pt:5}}>Subtotal:</Typography>
                      </>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <>
                        <Typography sx={{textAlign:'end',color:'black',fontSize:'15px',pt:5}}>$140.00</Typography>
                      </>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <>
                        <Typography sx={{textAlign:'start',color:'black',fontSize:'15px',pt:5}}>Delivery:</Typography>
                      </>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <>
                        <Typography sx={{textAlign:'end',color:'black',fontSize:'15px',pt:5}}>Free</Typography>
                      </>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <>
                        <Typography sx={{textAlign:'start',color:'black',fontSize:'15px',pt:5}}>Total:</Typography>
                      </>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <>
                        <Typography sx={{textAlign:'end',color:'black',fontSize:'15px',pt:5}}>$140.00</Typography>
                      </>
                    </Grid>
                  </Grid>
                  <Typography sx={{pt:12}}>
                    <Button sx={{color:'white',width:'80%',padding:'4%',fontSize:'18px',borderRadius:'0',bgcolor:'#FBB710'}}>checkout</Button>
                  </Typography>
                </Container>
              </Box>
            </>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
