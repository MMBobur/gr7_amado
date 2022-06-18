import React from "react";
import "./index.css";
import Box from "@mui/material/Box";
import Logo from "../../assets/index.png";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
export default () => {
  return (
    <Container maxWidth={"lg"}>
      <Box
        sx={{
          width: "320px",
          display: "inline-block",
          padding: "50px 0px",
          fontFamily: `sansarif`,
          fontWeight: "400",
        }}
      >
        <img src={Logo} alt="" />
        <Box sx={{ marginTop: "80px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "40px",
                height: "3px",
                backgroundColor: "#fbb710",
                display: "inlne-block",
                visibility: "hidden",
              }}
              className="Home1"
            ></Box>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                marginLeft: "15px",
                color: "black",
                fontSize: "16px",
                display: "inlne-block",
              }}
              className="Home"
            >
              HOME
            </Link>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Box
              sx={{
                width: "40px",
                height: "3px",
                backgroundColor: "#fbb710",
                display: "inlne-block",
                visibility: "hidden",
              }}
              className="Home1"
            ></Box>
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                marginLeft: "15px",
                color: "black",
                fontSize: "16apx",
                display: "inlne-block",
              }}
              className="Home"
            >
              SHOP
            </Link>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Box
              sx={{
                width: "40px",
                height: "3px",
                backgroundColor: "#fbb710",
                display: "inlne-block",
                visibility: "hidden",
              }}
              className="Home1"
            ></Box>
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                marginLeft: "15px",
                color: "black",
                fontSize: "16px",
                display: "inlne-block",
              }}
              className="Home"
            >
              PRODUCT
            </Link>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Box
              sx={{
                width: "40px",
                height: "3px",
                backgroundColor: "#fbb710",
                display: "inlne-block",
                visibility: "hidden",
              }}
              className="Home1"
            ></Box>
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                marginLeft: "15px",
                color: "black",
                fontSize: "16px",
                display: "inlne-block",
              }}
              className="Home"
            >
              CART
            </Link>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Box
              sx={{
                width: "40px",
                height: "3px",
                backgroundColor: "#fbb710",
                display: "inlne-block",
                visibility: "hidden",
              }}
              className="Home1"
            ></Box>
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                marginLeft: "15px",
                color: "black",
                fontSize: "16px",
                display: "inlne-block",
              }}
              className="Home"
            >
              CHECKOUT
            </Link>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: "0px",
          backgroundColor: "#fbb710",
          boxShadow: "none",
          width: "160px",
          height: "55px",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        %Discount%
      </Button>

      <Button
        variant="contained"
        sx={{
          marginTop:"10px",
          borderRadius: "0px",
          backgroundColor: "black",
          boxShadow: "none",
          width: "160px",
          height: "55px",
          fontSize: "15px",
          fontWeight: "700",
        }}
      >
        New this week
      </Button>
    </Container>
  );
};
