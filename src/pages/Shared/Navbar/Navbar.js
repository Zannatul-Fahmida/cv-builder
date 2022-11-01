import React from "react";
import logo from "../../../images/logo with text.png";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 300;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img sx={{ my: 2 }} src={logo} />
      <Divider />
      <List>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", flexDirection: "column" }}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/cvTemplates"
        >
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", flexDirection: "column" }}
            >
              <ListItemText primary="CV Templates" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/createCv"
        >
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", flexDirection: "column" }}
            >
              <ListItemText primary="Create CV" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/login">
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", flexDirection: "column" }}
            >
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/signup">
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", flexDirection: "column" }}
            >
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        style={{
          backgroundColor: "#ffffff",
          color: "black",
        }}
        component="nav"
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img src={logo} />
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button sx={{ color: "black" }}>Home</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/cvTemplates">
              <Button sx={{ color: "black" }}>CV Templates</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/createCv">
              <Button sx={{ color: "black" }}>Create CV</Button>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/login"
            >
              <Button sx={{ color: "black" }}>Login</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <Button
                sx={{
                  backgroundColor: "#6D129D",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#6D129D",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
