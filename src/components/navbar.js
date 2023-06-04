import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Home from "@mui/icons-material/Home";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined"; // import Link from "@mui/material/Link";
import RememberMeOutlinedIcon from "@mui/icons-material/RememberMeOutlined";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const drawerWidth = 240;
const navItems = ["Home", "About", "Skills", "Contacts"];

export default function DrawerAppBar() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center"
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <RememberMeOutlinedIcon
          sx={{ verticalAlign: "middle", mr: 1, textAlign: "center" }}
        />
        Dilip Kumar Jakhar
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>
          item === "Home" ? (
            <Link to="/" style={{ color: "#111", textDecoration: "none" }}>
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item}>
                    <Home
                      sx={{
                        background: "red",
                        mr: 2,
                        verticalAlign: "top"
                      }}
                    />
                    {item}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <Link
              to={"/" + item}
              style={{ color: "#111", textDecoration: "none" }}
            >
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item}>
                    <Home
                      sx={{
                        background: "red",
                        mr: 2,
                        verticalAlign: "top"
                      }}
                    />
                    {item}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          )
        )}
      </List>
    </Box>
  );

  // const container =
  // window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "red" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", flexGrow: 1 },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            DILIP KUMAR
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "block" }
            }}
          >
            {navItems.map((item, id) => (
              <Button
                sx={{
                  variant: "h1",
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                  fontWeight: 700,
                  textDecoration: "none"
                }}
                key={item}
                // sx={{ color: "#fff" }}
              >
                {item === "Home" ? (
                  <>
                    <Home
                      sx={{
                        me: 2,
                        color: "#ffff"
                      }}
                    />

                    <Link
                      to="/"
                      sx={{ textDecoration: "none" }}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {item}
                    </Link>
                  </>
                ) : (
                  <>
                    {item === "About" ? (
                      <PermIdentityRoundedIcon
                        sx={{
                          me: 2,
                          color: "#ffff"
                        }}
                      />
                    ) : item === "Skills" ? (
                      <Diversity2OutlinedIcon
                        sx={{
                          me: 2,
                          color: "#ffff"
                        }}
                      />
                    ) : item === "Contacts" ? (
                      <ConnectWithoutContactOutlinedIcon
                        sx={{
                          me: 2,
                          color: "#ffff"
                        }}
                      />
                    ) : null}

                    <Link
                      to={"/" + item}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {item}
                    </Link>
                  </>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}
