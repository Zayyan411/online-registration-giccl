import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const ResetPasswordPage = () => {
  const { token } = useParams(); // Grab token from URL
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    password: Yup.string().min(6).required("New password is required"),
  });

  const initialValues = { password: "" };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/auth/resetpassword/${token}`,
        values
      );

      if (response.status === 200) {
        toast.success("Password updated successfully!");
        navigate("/login");
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
              <h4 className="text-center mb-3">Reset Your Password</h4>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form noValidate>
                    <BootstrapForm.Group className="mb-4">
                      <BootstrapForm.Label>
                        New Password <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="password"
                        type="password"
                        as={BootstrapForm.Control}
                        placeholder="Enter your new password"
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
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner
                              animation="border"
                              size="sm"
                              className="me-2"
                            />
                            Updating...
                          </>
                        ) : (
                          "Reset Password"
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

export { ResetPasswordPage };
