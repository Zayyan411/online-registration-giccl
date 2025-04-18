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
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    fatherName: Yup.string().required("Father's name is required"),
    cnic: Yup.string()
      .required("CNIC/B-Form is required")
      .matches(
        /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/,
        "Must be in format XXXXX-XXXXXXX-X"
      ),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().required("Date of birth is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{11}$/, "Must be 11 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    fatherName: "",
    cnic: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values);
    // Here you would typically make an API call to register the user
    setTimeout(() => {
      setSubmitting(false);
      alert("Registration submitted successfully!");
      navigate("/login");
    }, 1000);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={8}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Account Registration</h2>

              <Alert variant="warning" className="mb-4">
                <strong>Enter All Information Carefully</strong> (Information
                will not edit/change later)
              </Alert>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {/* Name Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Name <small>(as per Matriculation Certificate)</small>
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="name"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="Enter your full name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* Father's Name Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Father's Name<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="fatherName"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="Enter father's name"
                      />
                      <ErrorMessage
                        name="fatherName"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* CNIC/B-Form Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        CNIC / B-Form No.{" "}
                        <small>
                          (Please enter carefully; it will not change later)
                        </small>
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="cnic"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="XXXXX-XXXXXXX-X"
                      />
                      <ErrorMessage
                        name="cnic"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* Gender Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Gender<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <div>
                        <Field
                          name="gender"
                          type="radio"
                          value="male"
                          as={BootstrapForm.Check}
                          inline
                          label="Male"
                          id="male"
                        />
                        <Field
                          name="gender"
                          type="radio"
                          value="female"
                          as={BootstrapForm.Check}
                          inline
                          label="Female"
                          id="female"
                        />
                        <Field
                          name="gender"
                          type="radio"
                          value="transgender"
                          as={BootstrapForm.Check}
                          inline
                          label="Transgender"
                          id="transgender"
                        />
                      </div>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* Date of Birth Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Date of Birth{" "}
                        <small>
                          (Please choose carefully, it will not change later)
                        </small>
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="dob"
                        type="date"
                        as={BootstrapForm.Control}
                      />
                      <ErrorMessage
                        name="dob"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* Address Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Postal Address<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="address"
                        as={BootstrapForm.Control}
                        rows={3}
                        placeholder="Enter your complete address"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* City Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        City<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field name="city" as={BootstrapForm.Select}>
                        <option value="">Select an Option</option>
                        <option value="karachi">Karachi</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="peshawar">Peshawar</option>
                        <option value="quetta">Quetta</option>
                      </Field>
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* Phone Number Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Phone Number<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="phone"
                        type="tel"
                        as={BootstrapForm.Control}
                        placeholder="03XXXXXXXXX"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* Email Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Email{" "}
                        <small>
                          (Enter a valid email; be careful it will not change
                          later)
                        </small>
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="email"
                        type="email"
                        as={BootstrapForm.Control}
                        placeholder="example@domain.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* Password Field */}
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Password{" "}
                        <small>
                          (At least 8 characters long, must contain 1 upper case
                          letter, 1 lower case letter and 1 number)
                        </small>
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="password"
                        type="password"
                        as={BootstrapForm.Control}
                        placeholder="Create a strong password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>

                    {/* Confirm Password Field */}
                    <BootstrapForm.Group className="mb-4">
                      <BootstrapForm.Label>
                        Confirm Password<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="confirmPassword"
                        type="password"
                        as={BootstrapForm.Control}
                        placeholder="Re-enter your password"
                      />
                      <ErrorMessage
                        name="confirmPassword"
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
                        {isSubmitting ? "Submitting..." : "Register"}
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
