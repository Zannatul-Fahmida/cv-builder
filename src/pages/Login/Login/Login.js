import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: '#ffffff',
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            textAlign: "start",
            backgroundColor: "#FDFFA6",
            padding: "50px",
          }}
        >
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box style={{ width: "500px" }}>
              <Typography variant="h3" gutterBottom style={{ fontWeight: 700 }}>
                Professional resumes for effective job interviews
              </Typography>
              <Typography>
                A great job application leads to a good interview. An amazing
                resume is what makes it all possible. Start off strong with the
                hiring manager by creating a positive professional image. A job
                interview can be much easier if they have a favorable view of
                your CV and cover letter.
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "50px" }}>
          <Container>
            <Paper
              elevation={3}
              style={{ padding: "20px", borderRadius: "10px" }}
            >
              <Typography variant="h3">Login</Typography>
              <Box
                component="form"
                noValidate
                sx={{
                  display: "grid",
                  gap: 2,
                }}
              >
                <FormControl variant="standard">
                  <InputLabel shrink htmlFor="email-input">
                    Email
                  </InputLabel>
                  <BootstrapInput
                    placeholder="Enter Your Email Here"
                    id="email-input"
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel shrink htmlFor="password-input">
                    password
                  </InputLabel>
                  <BootstrapInput
                    placeholder="Enter Your Password Here"
                    id="email-input"
                  />
                </FormControl>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FF9787", borderRadius: "29px" }}
                >
                  Login
                </Button>
              </Box>
              <Divider style={{ padding: "20px 0" }}>OR</Divider>
              <Box>
                <Button variant="contained">Linkedin</Button>
                <Button variant="contained">Google</Button>
              </Box>
              <Typography style={{ marginTop: "10px" }}>
                Don't have any account?{" "}
                <Link
                  style={{ textDecoration: "none", color: "#050FFF" }}
                  to="/signup"
                >
                  Sign up
                </Link>{" "}
                now
              </Typography>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
