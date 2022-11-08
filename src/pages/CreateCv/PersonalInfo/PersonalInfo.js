import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import user from "../../../images/Component 1.png";

const PersonalInfo = () => {
    return (
        <Box sx={{ width: "100%" }}>
        <Box sx={{ backgroundColor: "#ffffff", p: 2 }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ width: "100%" }}>
              <img src={user}></img>
            </Box>
            <Stack spacing={2} sx={{ width: "100%" }}>
              <TextField id="name" label="Full Name" variant="outlined" />
              <TextField id="address" label="Address" variant="outlined" />
              <TextField
                id="job-title"
                label="Job title"
                variant="outlined"
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ my: 2 }}
          >
            <TextField
              sx={{ width: "100%" }}
              id="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%" }}
              id="phone"
              label="Phone"
              variant="outlined"
            />
          </Stack>
          <Typography
            variant="h6"
            sx={{ color: "#6D129D", textAlign: "start", fontWeight: "bold" }}
          >
            Personal information
          </Typography>
          <Grid
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ my: 1 }}
          >
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Date of birth
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Nationality
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Passport
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Gender
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Marital status
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Military service
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Driving License
              </Button>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            sx={{ color: "#6D129D", textAlign: "start", fontWeight: "bold" }}
          >
            Links
          </Typography>
          <Grid
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ my: 1 }}
          >
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Website
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Linkedin
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Twitter
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Github
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Discord
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Facebook
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button
                sx={{
                  backgroundColor: "#FF9787",
                  width: "100%",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#FF9787",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                + Instagram
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
};

export default PersonalInfo;