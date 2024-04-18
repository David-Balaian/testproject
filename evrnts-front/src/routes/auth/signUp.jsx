import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { signUp } from "aws-amplify/auth";
import Notification from "../../components/notificationAlert";

export default function SignUp() {
  const [notificationData, setNotificationData] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: data.get("email"),
      password: data.get("password"),
      options: {
        userAttributes: {
          given_name: data.get("firstName"),
          family_name: data.get("lastName"),
        },
        autoSignIn: true,
      },
    });
    if (userId) {
      setNotificationData({
        type: "success",
        message:
          "Your account created, for verify account go to Email and verify it ",
      });
    }
  };

  return (
    <>
      {<Notification alert={notificationData} />}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
