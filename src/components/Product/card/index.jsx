import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Rating from "@mui/material/Rating";

import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
  boxShadow: "none",
}));

export default function AutoGrid() {
  const [value, setValue] = React.useState(2);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item
            sx={{
              color: "#FBBA10",
              fontSize: "26px",
              borderTop: "5px solid #FBBA10",
              fontWeight: "600",
              width: "19%",
            }}
          >
            $180
          </Item>
          <Item
            sx={{
              color: "black",
              fontSize: "33px",
              fontWeight: "500",
            }}
          >
            White Modern Chair
          </Item>
          <Item>
            <Box sx={{ justifyContent: "space-between", display: "flex" }}>
              <Rating
                sx={{ fontSize: "20px" }}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>{" "}
          </Item>
          <Item
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "300",
            }}
          >
            • In Stock
          </Item>
          <Item
            sx={{
              color: "gray",
              fontSize: "17px",
              fontWeight: "600",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            quae eveniet culpa officia quidem mollitia impedit iste asperiores
            nisi reprehenderit consequatur, autem, nostrum pariatur enim?
          </Item>
          <Item>
            <p
              style={{
                fontSize: "20px",
                color: "black",
                backgroundColor: "#E8E9EC",
                height: "31px",
                display: "inline-block",
                position: "relative",
                bottom: "3px",
              }}
              htmlFor=""
            >
              Qty
            </p>
            <input
              placeholder="2"
              type="number"
              style={{
                width: "100px",
                height: "30px",
                fontSize: "26px",
                color: "gray",
                borderRadius: "0px",
                border: "0px solid gray",
                backgroundColor: "#E8E9EC",
                display: "inline-block",
              }}
            />
          </Item>
          <Item>
            <Button
              sx={{
                backgroundColor: "#FBB710",
                color: "white",
                width: "300px",
                height: "70px",
                borderRadius: "0px",
                ":hover": {
                  backgroundColor: "black",
                  color: "white",
                  transition: "0.2s ease",
                },
                fontSize: "17px",
              }}
              variant="contained"
              disableElevation
            >
              Add to card
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
