import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import {
  Card,
  Container,
  Content,
  Data,
  Description,
  Option,
  Status,
  Title,
} from "./style";

const taskCard = () => {
  return (
    <Container>
      <Card>
        <Content>
          <Status>
            <div>Concluido</div>
          </Status>
          <Title>
            <div>Trabalho de Prog Web</div>
          </Title>
          <Data>
            <div>12 de agosto, 2023 </div>
          </Data>
          <Description>
            <div>
              Criar sistema web usando html, css e js e também ajustar
              resposividade.
            </div>
          </Description>
        </Content>
        <Option>
          <EditIcon style={{ cursor: "pointer" }} />
          <DeleteOutlineIcon style={{ cursor: "pointer", color: "red" }} />
        </Option>
      </Card>
    </Container>
  );
};

export default taskCard;
