import React from "react";
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

const TaskCard = ({ status, title, data, description }) => {
  return (
    <Container>
      {status ? (
        <Card>
          <Content>
            <Header>
              <Status>
                <div>{status}</div>
              </Status>
              <Option>
                <EditIcon style={{ cursor: "pointer" }} />
                <DeleteOutlineIcon
                  style={{ cursor: "pointer", color: "red" }}
                />
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
    </Container>
  );
};

export default TaskCard;
