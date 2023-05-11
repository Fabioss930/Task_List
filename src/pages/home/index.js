import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import TaskCard from "../../components/taskCard";
import IconUser from "@mui/icons-material/Person";
import { Body, ComponentToolBar, ComponentUser } from "./styles";
import ButtonModal from "../../components/Button";
import ModalForm from "../../components/Modal";


const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const drawerWidth = 240;

  return (
    <>
      <Body>
        <Box sx={{ display: "flex", zIndex: 1 }}>
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
                <ButtonModal
                  Text="Criar"
                  style={{
                    backgroundColor: "#12A454",
                    width: 144,
                    height: 33,
                    marginRight: 220,
                    borderRadius: 8,
                  }}
                  onClick={handleShow}
                />
                <ComponentUser>
                  <div
                    style={{
                      marginRight: 18,
                    }}
                  >
                    Fabio
                  </div>
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
      <TaskCard />
      
      <ModalForm show={show} onHide={handleClose} onClick={handleClose}/>
    </Body>
  </>
  );
};

export default Home;
