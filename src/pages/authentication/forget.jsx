import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form as BootstrapForm,
  Alert,
} from "react-bootstrap";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  // Validation schema
  const validationSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9]{11}$/, "Must be a valid 11-digit mobile number"),
  });

  // Initial form values
  const initialValues = {
    mobileNumber: "",
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values);
    // Here you would typically make an API call to send the reset link
    setTimeout(() => {
      setSubmitting(false);
      alert("Password reset link has been sent to your mobile number!");
      navigate("/login");
    }, 1000);
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

              <h4 className="text-center mb-3">Forgot Password?</h4>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <p className="text-center mb-3">
                      Enter your active mobile number to receive link to reset
                    </p>

                    <Alert variant="warning" className="mb-3">
                      <strong>Important!!!</strong> You can do forgot password
                      process only for limited number of times so before
                      clicking Submit button check your mobile space to receive
                      sms.
                    </Alert>

                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>Mobile Number</BootstrapForm.Label>
                      <Field
                        name="mobileNumber"
                        type="tel"
                        as={BootstrapForm.Control}
                        placeholder="03XXXXXXXXX"
                      />
                      <ErrorMessage
                        name="mobileNumber"
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
                        {isSubmitting ? "Sending..." : "Submit"}
                      </Button>
                    </div>

                    <div className="text-center">
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <Link to="/sign-up">Sign Up Here</Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>

          <footer className="mt-3 text-center text-muted small">
            Copyright 2023 - GIGCCL College Lahore. All Rights Reserved
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export { ForgotPasswordPage };
