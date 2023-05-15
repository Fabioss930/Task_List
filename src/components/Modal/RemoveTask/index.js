import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RemoveTask = ({ show, onClick, onHide, id }) => {
  const [showModalRemove, setShowModalRemove] = useState(false);
  const handleCloseRemove = () => setShowModalRemove(false);
  return (
    <>
      <Modal show={show} onHide={onHide} id={id}>
        <Modal.Header closeButton>
          <Modal.Title>Remover item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja realmente remover esse item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRemove}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={onClick}>
            Remover
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveTask;
