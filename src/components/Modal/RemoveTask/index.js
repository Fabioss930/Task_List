import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const RemoveTask = ({ show, onClick, onHide, id, onClickCapture }) => {
  
  return (
    <>
      <Modal show={show} onHide={onHide} id={id}>
        <Modal.Header closeButton>
          <Modal.Title>Remover item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja realmente remover esse item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClickCapture={onClickCapture}>
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
