import React from "react";
import { Typography, Container, Button } from "@mui/material";
import ErrorImage from "../../assets/page-not-found.webp";

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" align="center">
        Oops! The page you are looking for does not exist.
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        <Button variant="contained" href="/">
          Back to home page
        </Button>
      </Typography>
      <img
        src={ErrorImage}
        alt="404 Error"
        style={{
          display: "block",
          margin: "auto",
          maxWidth: "550px",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      />
    </Container>
  );
};

export default NotFound;
