import React, { useState, useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

import {
  Card,
  Container,
  Content,
  Data,
  Description,
  Header,
  Option,
  Status,
  Title,
} from './style';

import RemoveTask from '../Modal/RemoveTask';
import useAuth from '../../hooks/useAuth';
import EditTask from '../Modal/EditTask';

const TaskCard = ({ id, status, title, data, description }) => {
  const [showModalRemove, setShowModalRemove] = useState(false);
  const [show, setShow] = useState(false);
  const handleShowRemove = () => setShowModalRemove(true);
  const handleCloseRemove = () => setShowModalRemove(false);
  const handleClose = () => setShow(false);
  
  const { handleDeleteTask, handleEditTask, openModalEdit,
    setOpenModalEdit } = useAuth();

  const handleShow = async (id) => {
    setShow(true);
    await handleEditTask(id);

  }
  
  const DeleteTask = async (id) => {
    await handleDeleteTask(id);
  };

  useEffect(() => {
    if (openModalEdit === false) {
      setTimeout(function () {
        setShow(false);
      }, 1000);
      setOpenModalEdit(true);
      
    }

    }, [openModalEdit]);

  return (
    <Container>
      <Card id={id}>
        <Content>
          <Header>
            <Status color={status}>
              <div>{status}</div>
            </Status>
            <Option>
              <button onClick={()=> handleShow(id)} style={{ all: 'unset' }}>
                <EditIcon style={{ cursor: 'pointer' }} />
              </button>
              <button onClick={handleShowRemove} style={{ all: 'unset' }}>
                <DeleteOutlineIcon
                  style={{ cursor: 'pointer', color: '#f23838', marginLeft: 3 }}
                ></DeleteOutlineIcon>
              </button>
            </Option>
          </Header>

          <Title>
            <div>{title}</div>
          </Title>
          <Data>
            <div>{data}</div>
          </Data>
          <Description>
            <div>{description}</div>
          </Description>
        </Content>
      </Card>

      <RemoveTask
        show={showModalRemove}
        onHide={handleCloseRemove}
        onClick={() => DeleteTask(id)}
        onClickCapture={handleCloseRemove}
      />

      <EditTask show={show} onClick={handleClose} onHide={handleClose} key={id}/>
    </Container>
  );
};

export default TaskCard;
