import React, { useEffect, useState, useCallback, useFocusEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import TaskCard from "../../components/TaskCard";
import IconUser from "@mui/icons-material/Person";
import {
  Body,
  ComponentToolBar,
  ComponentUser,
  Container,
  ContainerBox,
  EmptyList,
} from "./styles";
import ButtonModal from "../../components/Button";
import ModalForm from "../../components/Modal";
import useAuth from "../../hooks/useAuth";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const [show, setShow] = useState(false);
  const { openModal, setOpenModal, handleSaveForm } = useAuth();
  const { isLoading, setIsLoading } = useState(true);
  const handleClose = () => setShow(false);
  const [task, setTask] = useState([]);
  const handleShow = () => setShow(true);
  const drawerWidth = 230;

  useEffect(() => {
    if (openModal === false) {
      setTimeout(function () {
        setShow(false);
      }, 1000);
      setOpenModal(true);
    }

    // localStorage.removeItem("task");
  }, [openModal]);

  const getTaskLocalStorage = async () => {
    const data = await localStorage.getItem("task");
    const taskList = data ? JSON.parse(data) : [];

    setTask(taskList);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(function () {
      getTaskLocalStorage();
    }, 1000);
  }, [openModal]);

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

        <Container>
          {!isLoading &&
            task.map((item) => {
              return (
                <TaskCard
                  key={item.id}
                  status={item.status}
                  title={item.title}
                  data={item.data}
                  description={item.description}
                />
              );
            })}
        </Container>

        <ModalForm show={show} onHide={handleClose} onClick={handleClose} />
        <Toaster />
      </Body>
    </>
  );
};

export default Home;
