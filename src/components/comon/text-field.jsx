import React from "react";
import Form from "react-bootstrap/Form";

const TextField = ({ label, field, required = false, type, placeholder }) => {
  return (
    <Form.Group className="flex flex-column gap-1" controlId="">
      {required && <span className="text-danger mx-1">*</span>}
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={field}
        placeholder={placeholder}
        className="shadow-none"
      />
    </Form.Group>
  );
};

export { TextField };
