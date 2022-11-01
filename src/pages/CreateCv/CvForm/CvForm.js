import { Stack, Box, Button, Typography, TextField, Grid } from "@mui/material";
import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import user from "../../../images/Component 1.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  width: "100%",
}));

const CvForm = () => {
  return (
    <div>
      <Navbar />
      <Stack
        sx={{ backgroundColor: "#F5ECFF", p: 2, pb: 0 }}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ width: "100%" }}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                px: 2,
              }}
            >
              content
            </Button>
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                px: 2,
              }}
            >
              customize
            </Button>
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "black",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                px: 2,
              }}
            >
              download
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            sx={{ backgroundColor: "#ffffff", my: 2, p: 2 }}
          >
            <Typography sx={{ fontWeight: "bold" }}>CV 1</Typography>
            <EditIcon sx={{ color: "#6D129D" }} />
          </Stack>
          <Box sx={{ backgroundColor: "#ffffff", p: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "#6D129D", textAlign: "start", fontWeight: "bold" }}
            >
              Edit personal details
            </Typography>
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
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
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
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                <Button sx={{ backgroundColor: "#FF9787", color: "#ffffff" }}>
                  + Date of birth
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ backgroundColor: '#ffffff', my: 2 , p: 2}}
          >
            <Button sx={{ backgroundColor: "#00A32E", color: "#ffffff" }}>Next</Button>
            <Button sx={{ backgroundColor: "#6D129D", color: "#ffffff" }}>Save</Button>
            <Button sx={{ backgroundColor: "#FD5A5A", color: "#ffffff" }}>Cancel</Button>
          </Stack>
        </Box>
        <Item></Item>
      </Stack>
    </div>
  );
};

export default CvForm;
