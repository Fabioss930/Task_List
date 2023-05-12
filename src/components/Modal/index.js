import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SelectStatus from '../../components/Select'

const ModalForm =({show, onHide, onClick})=> {
  
  return (
    <>
    <Modal show={show} onHide={onHide} style={{}}>
        <Modal.Header closeButton>
          <Modal.Title>Criar tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="email"
                placeholder="Titulo da tarefa"
                autoFocus
              />
              
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descreva a tarefa</Form.Label>
              <Form.Control as="textarea" rows={3} />
              
            </Form.Group>
            <Form.Group className="mb-3">
             
            </Form.Group>
            <SelectStatus/>
          </Form>
          
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={onClick}>
            Salvar
          </Button>
        </Modal.Footer>
        
      </Modal>
      
    </>
  );
}

export default ModalForm;