import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import TaskCard from '../../components/TaskCard';
import IconUser from '@mui/icons-material/Person';
import {
  Body,
  ComponentLogo,
  ComponentToolBar,
  ComponentUser,
  Container,
  ContentTask,
  EmptyList,
  QtdTask,
} from './styles';
import ButtonModal from '../../components/Button';
import ModalForm from '../../components/Modal/SaveTask';
import useAuth from '../../hooks/useAuth';
import { Toaster } from 'react-hot-toast';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import BasicMenu from '../../components/Menu';
import RouterBreadcrumbs from '../../components/BreadcrumbsDrawer';
import LogoSmall from '../../assets/Task-List 3.svg';

const Home = () => {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [qtdTask, setQtdTask] = useState(0);

  const {
    openModal,
    setOpenModal,
    openModalDelete,
    setOpenModalDelete,
    openModalEdit,
    signout,
    nameUser,
    user_id,
  } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const drawerWidth = 301;
  const handleCloseMenu = () => setAnchorEl(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (openModal === false) {
      setTimeout(function () {
        setShow(false);
      }, 1000);
      setOpenModal(true);
    }
  }, [openModal]);

  const getTaskLocalStorage = async () => {
    const dataKey = `task_user${user_id}`;
    const data = await localStorage.getItem(dataKey);
    const taskList = data ? JSON.parse(data) : [];
    setQtdTask(taskList.length);

    setTask(taskList);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(function () {
      getTaskLocalStorage();
    }, 1000);
  }, [openModal]);

  useEffect(() => {
    setTimeout(function () {
      getTaskLocalStorage();
    }, 1000);
  }, [openModalEdit]);

  useEffect(() => {
    getTaskLocalStorage();
    setOpenModalDelete(true);
  }, [openModalDelete]);

  return (
    <>
      {!isLoading ? (
        <Body>
          <Box sx={{ display: 'flex', zIndex: 1 }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
                backgroundColor: '#FFFFFF',
              }}
            >
              <Toolbar>
                <ComponentToolBar>
                  <ButtonModal
                    Text="Criar tarefa"
                    style={{
                      backgroundColor: '#12A454',
                      width: 144,
                      height: 33,
                      marginRight: 220,
                      borderRadius: 4,
                    }}
                    onClick={handleShow}
                  />
                  <ComponentUser>
                    <div
                      style={{
                        marginRight: 18,
                      }}
                    >
                      {!isLoading ? nameUser : ''}
                    </div>
                    <button
                      onClick={handleClick}
                      style={{ all: 'unset' }}
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <IconUser style={{ cursor: 'pointer' }} />
                    </button>
                    <BasicMenu
                      onClick={signout}
                      open={open}
                      onClose={handleCloseMenu}
                      anchorEl={anchorEl}
                    />
                  </ComponentUser>
                </ComponentToolBar>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  display: 'flex',

                  alignItems: 'center',
                  boxSizing: 'border-box',
                  backgroundColor: '#121620',
                  color: '#f1f5f9;',
                },
              }}
              variant="permanent"
              anchor="left"
            >
              <ComponentLogo>
                <img src={LogoSmall} className="App-logo" alt="logo" />
              </ComponentLogo>
              <RouterBreadcrumbs />
            </Drawer>
          </Box>

          {task.length > 0 ? (
            <ContentTask>
              <QtdTask>
                <span>{qtdTask}</span>
                <span> tarefa</span>
              </QtdTask>
              <Container>
                {task.map((item) => {
                  return (
                    <TaskCard
                      id={item.id}
                      key={item.id}
                      status={item.status}
                      title={item.title}
                      data={item.data}
                      description={item.description}
                    />
                  );
                })}
              </Container>
            </ContentTask>
          ) : (
            <EmptyList>
              <h1>Nenhum item foi encontrado :(</h1>
            </EmptyList>
          )}
        </Body>
      ) : (
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={true}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <ModalForm show={show} onHide={handleClose} onClick={handleClose} />
      <Toaster />
    </>
  );
};

export default Home;
