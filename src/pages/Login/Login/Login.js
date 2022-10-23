import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={6} style={{textAlign: 'start', fontWeight: "bolder"}}>
          <Typography variant="h3" gutterBottom>
            Professional resumes for effective job interviews
          </Typography>
          <Typography>
            A great job application leads to a good interview. An amazing resume
            is what makes it all possible. Start off strong with the hiring
            manager by creating a positive professional image. A job interview
            can be much easier if they have a favorable view of your CV and
            cover letter.
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h3">Login</Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default Login;
