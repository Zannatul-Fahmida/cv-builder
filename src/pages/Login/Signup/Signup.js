import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography,
  } from "@mui/material";
import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from "react-router-dom";
import CommonFooter from "../../Shared/CommonFooter/CommonFooter";

const UserInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: "#ffffff",
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

const Signup = () => {
    return (       
    <div>
    <Navbar></Navbar>
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{textAlign: {xs: "center", md: "start"}}}
        style={{
          backgroundColor: "#FFE2EE",
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
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
            You’re minutes away from a better resume
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
      <Grid item xs={12} md={6} style={{ padding: "60px" }}>
        <Container sx={{p : 0}}>
          <Paper
            elevation={3}
            style={{ padding: "20px", borderRadius: "10px" }}
          >
            <Typography variant="h3">Sign up</Typography>
            <Box
              component="form"
              noValidate
              sx={{
                display: "grid",
                gap: 2,
              }}
            >
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="name-input">
                  Name
                </InputLabel>
                <UserInput
                  placeholder="Enter Your Name Here"
                  id="name-input"
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="email-input">
                  Email
                </InputLabel>
                <UserInput
                  placeholder="Enter Your Email Here"
                  id="email-input"
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="password-input">
                  Password
                </InputLabel>
                <UserInput
                  placeholder="Enter Your Password Here"
                  id="password-input"
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="confirm-password-input">
                  Confirm Password
                </InputLabel>
                <UserInput
                  placeholder="Enter Your Confirm Password Here"
                  id="confirm-password-input"
                />
              </FormControl>
              <Button
                variant="contained"
                style={{ backgroundColor: "#FF9787", borderRadius: "29px" }}
              >
                Sign Up
              </Button>
            </Box>
            <Divider style={{ padding: "20px 0" }}>OR</Divider>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#0A66C2",
                }}
              >
                <span>in</span> <span>Linkedin</span>
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#EF5858",
                }}
              >
                <span>G</span> <span>Google</span>
              </Button>
            </Stack>
            <Typography style={{ marginTop: "10px" }}>
            Already have an account?
              <Link
                style={{ textDecoration: "none", color: "#050FFF", padding: '0 5px' }}
                to="/login"
              >
                Login 
              </Link>
              now
            </Typography>
          </Paper>
        </Container>
      </Grid>
    </Grid>
    <CommonFooter />
  </div>
    );
};

export default Signup;