import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { initialValues, validationSchema } from "./schema";
import { toast } from "react-toastify";

const DashboardForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("firstName", values.fname);
      formData.append("middleName", values.middleName);
      formData.append("lastName", values.lname);
      formData.append("fatherName", values.fatherName);
      formData.append("cnic", values.cnic);
      formData.append("fatherCnic", values.fCnic);
      formData.append("gender", values.gender);
      formData.append("dateOfBirth", values.dob);
      formData.append("phoneNumber", values.phone);
      formData.append("email", values.email);
      formData.append("address1", values.address1);
      formData.append("address2", values.address2 || "");
      formData.append("country", values.country);
      formData.append("city", values.city);
      formData.append("state", values.state || "");
      formData.append("image", values.picture);

      const response = await fetch("http://localhost:5000/api/auth/admission", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Admission submitted successfully!");
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <h2 className="mb-4">Admission Form</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <Row>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        First Name <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="fname"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="Enter your first name"
                      />
                      <ErrorMessage
                        name="fname"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>Middle Name</BootstrapForm.Label>
                      <Field
                        name="middleName"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="Enter your middle name"
                      />
                    </BootstrapForm.Group>
                  </Col>{" "}
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Last Name <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="lname"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="Enter your last name"
                      />
                      <ErrorMessage
                        name="lname"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        CNIC / B-Form No
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="cnic"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="XXXXX-XXXXXXX-X"
                        maxLength={15}
                      />
                      <ErrorMessage
                        name="cnic"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Father Name<span className="text-danger">*</span>
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
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>Father CNIC</BootstrapForm.Label>
                      <Field
                        name="fCnic"
                        type="text"
                        as={BootstrapForm.Control}
                        placeholder="XXXXX-XXXXXXX-X"
                        maxLength={15}
                      />
                      <ErrorMessage
                        name="fCnic"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
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
                        />
                        <Field
                          name="gender"
                          type="radio"
                          value="female"
                          as={BootstrapForm.Check}
                          inline
                          label="Female"
                        />
                        <Field
                          name="gender"
                          type="radio"
                          value="transgender"
                          as={BootstrapForm.Check}
                          inline
                          label="Transgender"
                        />
                      </div>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Date of Birth
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
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Phone Number<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="phone"
                        type="tel"
                        as={BootstrapForm.Control}
                        placeholder="03XXXXXXXXX"
                        maxLength={15}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Upload Picture <small>(JPEG, PNG - Max 2MB)</small>
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <input
                        name="picture"
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          if (file) {
                            setFieldValue("picture", file);
                          }
                        }}
                      />
                      <ErrorMessage
                        name="picture"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Email
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
                  </Col>
                  <Col md={12}>
                    <BootstrapForm.Group className="mb-4">
                      <BootstrapForm.Label>
                        Address1<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="address1"
                        as={BootstrapForm.Control}
                        placeholder="Enter address1"
                        rows={3}
                      />
                      <ErrorMessage
                        name="address1"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={12}>
                    <BootstrapForm.Group className="mb-4">
                      <BootstrapForm.Label>Address2</BootstrapForm.Label>
                      <Field
                        name="address2"
                        as={BootstrapForm.Control}
                        placeholder="Enter address2"
                        rows={3}
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>
                        Country <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        name="country"
                        as={BootstrapForm.Control}
                        placeholder="Enter Country Name"
                      />
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={4}>
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
                  </Col>
                  <Col md={4}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>State</BootstrapForm.Label>
                      <Field
                        name="state"
                        as={BootstrapForm.Control}
                        placeholder="Enter State"
                      />
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="text-danger small"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={12}>
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
                        "Submit"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export { DashboardForm };
