import React from "react";
import { Typography, Container } from "@mui/material";
import NoDataImage from "../../assets/noData.jpg";

const NoData = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        No Data Available
      </Typography>
      <Typography variant="body1" align="center">
        Oops! There is no data to display at the moment.
      </Typography>
      <img
        src={NoDataImage}
        alt="No Data"
        style={{ display: "block", margin: "auto" }}
      />
    </Container>
  );
};

export default NoData;
