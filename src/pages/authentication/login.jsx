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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        values
      );

      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Login successful");
        navigate("/dashboard");
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
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold">GIGCCL</h2>
                <p className="text-muted">Courage to Know</p>
              </div>

              <h5 className="text-center mb-3">Login here by using your</h5>
              <p className="text-center text-muted mb-4">Email and Password</p>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>Your email:</BootstrapForm.Label>
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

                    <BootstrapForm.Group className="mb-4">
                      <BootstrapForm.Label>Password:</BootstrapForm.Label>
                      <Field
                        name="password"
                        type="password"
                        as={BootstrapForm.Control}
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    <div className="d-grid mb-3">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                        ) : (
                          "Login"
                        )}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className="text-center">
                <Link to="/forgot-password" className="d-block mb-2">
                  Forgot Password?
                </Link>
                <p className="mb-0">
                  Don't have an account? <Link to="/sign-up">Sign Up Now</Link>
                </p>
              </div>
            </Card.Body>
          </Card>

          <footer className="mt-3 text-center text-muted small">
            Copyright 2023 - GIGCCL University Lahore. All Rights Reserved
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export { LoginPage };
