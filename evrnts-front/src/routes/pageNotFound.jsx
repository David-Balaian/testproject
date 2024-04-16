import { Box, Button } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="error-page"
    >
      <h1>Oops!</h1>
      <p>Sorry, Page Not Found </p>
      <p>
        <h2> ERROR 404</h2>
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <Button variant="contained" href="/">
          Back to home page
        </Button>
      </p>
    </Box>
  );
}
