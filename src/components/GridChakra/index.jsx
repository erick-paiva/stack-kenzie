import { Grid } from "@chakra-ui/react";
import React from "react";

function GridChakra({ children }) {
  return (
    <Grid
      margin={"50px"}
      gap={"20px"}
      templateRows={"repeat(6,1fr)"}
      templateColumns={"repeat(12,1fr)"}
    >
      {children}
    </Grid>
  );
}

export default GridChakra;
