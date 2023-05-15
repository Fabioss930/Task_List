import React, { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

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
} from "./style";

import RemoveTask from "../Modal/RemoveTask";
import useAuth from "../../hooks/useAuth";

const TaskCard = ({ id, status, title, data, description, onClick }) => {
  const [showModalRemove, setShowModalRemove] = useState(false);
  const handleShowRemove = () => setShowModalRemove(true);
  const handleCloseRemove = () => setShowModalRemove(false);
  const [task, setTask] = useState([]);
  const { handleDeleteTask } = useAuth();

  const DeleteTask = async (id) => {
    handleDeleteTask(id);
  };

  return (
    <Container>
      {status ? (
        <Card id={id}>
          <Content>
            <Header>
              <Status>
                <div>{status}</div>
              </Status>
              <Option>
                <EditIcon style={{ cursor: "pointer" }} />
                <button onClick={handleShowRemove} style={{ all: "unset" }}>
                  <DeleteOutlineIcon
                    style={{ cursor: "pointer", color: "red" }}
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
      ) : (
        <EmptyList>
          <span>Nada ainda</span>
        </EmptyList>
      )}
      <RemoveTask
        show={showModalRemove}
        onHide={handleCloseRemove}
        onClick={() => DeleteTask(id)}
      />
    </Container>
  );
};

export default TaskCard;
