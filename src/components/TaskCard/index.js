import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

import {
  Card,
  Container,
  Content,
  Data,
  Description,
  EmptyList,
  Header,
  Option,
  Status,
  Title,
} from './style';

import RemoveTask from '../Modal/RemoveTask';
import useAuth from '../../hooks/useAuth';

const TaskCard = ({ id, status, title, data, description, onClick }) => {
  const [showModalRemove, setShowModalRemove] = useState(false);
  const handleShowRemove = () => setShowModalRemove(true);
  const handleCloseRemove = () => setShowModalRemove(false);
  const { handleDeleteTask } = useAuth();
  const [pending, setPending] = useState('Pendente');
  const [progress, setProgress] = useState('Em progresso');
  const [concluded, setConcluded] = useState('Concluído');
  const DeleteTask = async (id) => {
    await handleDeleteTask(id);
  };

  return (
    <Container>
      <Card id={id}>
        <Content>
          <Header>
               <Status color={status}>
                  <div>{status}</div>
                </Status>
            <Option>
              <EditIcon style={{ cursor: 'pointer' }} />
              <button onClick={handleShowRemove} style={{ all: 'unset' }}>
                <DeleteOutlineIcon
                  style={{ cursor: 'pointer', color: 'red', marginLeft: 3 }}
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
    </Container>
  );
};

export default TaskCard;
