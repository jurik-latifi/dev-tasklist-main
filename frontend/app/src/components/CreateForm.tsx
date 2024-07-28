import React from 'react';
import { Form } from 'react-bootstrap';

const CreateForm = ({ label, type, name, value, onChange }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} value={value} onChange={onChange} />
    </Form.Group>
  );
};

export default CreateForm;
