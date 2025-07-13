import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fname: Yup.string().required("First Name is required"),
  middleName: Yup.string().required("Middle Name is required"),
  lname: Yup.string().required("Last Name is required"),
  fatherName: Yup.string().required("Father's name is required"),
  cnic: Yup.string()
    .required("CNIC is required")
    .matches(
      /^\d{5}-\d{7}-\d{1}$/,
      "Invalid CNIC format (e.g., 35202-1234567-8)"
    ),
  fCnic: Yup.string()
    .required("Father's CNIC is required")
    .matches(
      /^\d{5}-\d{7}-\d{1}$/,
      "Invalid CNIC format (e.g., 35202-1234567-8)"
    ),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.date().required("Date of birth is required"),
  address1: Yup.string().required("Address1 is required"),
  address2: Yup.string(),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string(),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Must be exactly 11 digits (e.g., 03001234567)"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  picture: Yup.mixed()
    .required("Picture is required")
    .test("fileSize", "File too large (max 2MB)", (value) =>
      value ? value.size <= 2000000 : false
    )
    .test("fileFormat", "Unsupported file format", (value) =>
      value
        ? ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
        : false
    ),
});

const initialValues = {
  fname: "",
  middleName: "",
  lname: "",
  fatherName: "",
  cnic: "",
  fCnic: "",
  gender: "",
  dob: "",
  address1: "",
  address2: "",
  country: "",
  city: "",
  state: "",
  phone: "",
  email: "",
  picture: null,
};

export { validationSchema, initialValues };
