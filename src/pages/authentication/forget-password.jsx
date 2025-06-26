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
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const initialValues = { email: "" };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgotpassword",
        values
      );
      if (response.status === 200) {
        toast.success("Reset link sent to your email!");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Server error. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold">GIGCCL</h2>
                <p className="text-muted">Courage to Know</p>
              </div>
              <h4 className="text-center mb-3">Forgot Password</h4>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form noValidate>
                    <BootstrapForm.Group className="mb-4">
                      <BootstrapForm.Label>
                        Email <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="email"
                        type="email"
                        as={BootstrapForm.Control}
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    <div className="d-grid">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner
                              animation="border"
                              size="sm"
                              className="me-2"
                            />
                            Sending...
                          </>
                        ) : (
                          "Send Reset Link"
                        )}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
          <footer className="mt-3 text-center text-muted small">
            Copyright © 2023 - GIGCCL College Lahore.
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export { ForgotPasswordPage };
