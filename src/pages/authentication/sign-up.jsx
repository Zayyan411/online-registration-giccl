import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form as BootstrapForm,
  Spinner,
} from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://online-registration-backened.vercel.app/api/auth/register",
        values
      );

      if (response.status === 201) {
        toast.success("Registration submitted successfully!");
        navigate("/login");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      if (error.response) {
        const message =
          error.response.data.message ||
          "Login failed. Please check your credentials.";
        toast.error(message);
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={8}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Account Registration</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Name
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="name"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="Enter a name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Email
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="email"
                        type="text"
                        as={BootstrapForm.Control}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-4">
                      <BootstrapForm.Label>
                        Password<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="password"
                        type="password"
                        as={BootstrapForm.Control}
                        placeholder="enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                    <div className="d-grid">
                      <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                        ) : (
                          "Register"
                        )}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export { RegistrationForm };
