import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconUser from "@mui/icons-material/Person";
import { ComponentToolBar, ComponentUser } from "./styles";

const Home = () => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Toolbar>
          <ComponentToolBar>
            <ComponentUser>
              <div style={{ marginRight: 18 }}>Fabio</div>
              <IconUser />
            </ComponentUser>
          </ComponentToolBar>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#121620",
          },
        }}
        variant="permanent"
        anchor="left"
      ></Drawer>
    </Box>
  );
};

export default Home;
