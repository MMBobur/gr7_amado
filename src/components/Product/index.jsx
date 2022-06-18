import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Carousel from "./carousel/index";
import Card from "./card/index.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "170px" }}>
      <Grid container spacing={3}>
        <Grid item md={7} sm={12} xs={12}>
          <Item>
            <Carousel />
          </Item>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <Item sx={{ textAlign: "left", marginTop: "74px" }}>
            <Card />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
