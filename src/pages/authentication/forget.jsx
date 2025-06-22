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
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New password is required"),
  });

  const initialValues = {
    currentPassword: "",
    newPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("User not logged in. Please login first.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/updatepassword",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Password updated successfully!");
        navigate("/login");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Server error. Please try again.");
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
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold">GIGCCL</h2>
                <p className="text-muted">Courage to Know</p>
              </div>

              <h4 className="text-center mb-3">Reset Password</h4>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form noValidate>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Current Password<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="currentPassword"
                        type="password"
                        as={BootstrapForm.Control}
                        placeholder="Enter your current password"
                      />
                      <ErrorMessage
                        name="currentPassword"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-4">
                      <BootstrapForm.Label>
                        New Password<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="newPassword"
                        type="password"
                        as={BootstrapForm.Control}
                        placeholder="Enter a new password"
                      />
                      <ErrorMessage
                        name="newPassword"
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
                          "Update Password"
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
