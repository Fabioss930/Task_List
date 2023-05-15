import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import SelectStatus from "../../Select";

import useAuth from "../../../hooks/useAuth";

const ModalForm = ({ show, onHide, onClick }) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { handleSaveForm } = useAuth();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const validateForm = () => {
    const { title, description, status } = form;
    const newError = {};

    if (!title || title === "") newError.title = "Título obrigatório!";
    if (!description || description === "")
      newError.description = "Descrição obrigatória!";
    if (!status || status === "") newError.status = "Status obrigatório!";

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      handleSaveForm(form);
    }
    setTimeout(function () {
      setForm("");
    }, 1000);
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Criar tarefa</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo da tarefa"
                autoFocus
                onChange={(e) => setField("title", e.target.value)}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ display: "block" }}
              >
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descrição da tarefa"
                type="text"
                onChange={(e) => setField("description", e.target.value)}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ display: "block" }}
              >
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
              <SelectStatus
                onChange={(selected) => {
                  setField("status", selected);
                }}
                value={form.status || ""}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ display: "block" }}
              >
                {errors.status}
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClick}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
