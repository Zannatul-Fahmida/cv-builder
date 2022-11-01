import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  height: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
}));
const AddItem = styled(Paper)(({ theme }) => ({
  border: "1px dashed #9C9C9C",
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  cursor: "pointer",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CreateCv = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Divider
          sx={{
            "&::before, &::after": {
              borderColor: "#FF9787",
            },
            my: 4,
            color: "#6D129D",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Create CV
        </Divider>
        <Typography sx={{ color: "#9C9C9C" }}>
          Your first resume – 100% free, forever, all features, unlimited
          downloads, yes really.
        </Typography>
        <Box sx={{ my: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <Item>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "black" }}
                >
                  <MoreHorizIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Link
                    to="/cvForm"
                    style={{
                      textDecoration: "none",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
                <Link
                  to="/cvForm"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center"
                  }}
                >
                  <Typography>CV 1</Typography>
                </Link>
              </Item>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <AddItem>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AddIcon /> Create New CV
                  </Typography>
                </AddItem>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CreateCv;
