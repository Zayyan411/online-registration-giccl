import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  fname: Yup.string().required("First Name is required"),
  middleName: Yup.string().required("Middle Name is required"),
  lname: Yup.string().required("Last Name is required"),
  fatherName: Yup.string().required("Father's name is required"),
  cnic: Yup.string()
    .required("CNIC/B-Form is required")
    .max(15, "CNIC must not be more than 15 characters"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.date().required("Date of birth is required"),
  address1: Yup.string().required("Address1 is required"),
  address2: Yup.string().optional(),
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
  picture: Yup.mixed()
    .required("Picture is required")
    .test(
      "fileSize",
      "File too large",
      (value) => !value || (value && value.size <= 2000000) // 2MB
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) =>
        !value ||
        (value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type))
    ),
});

const initialValues = {
  fname: "",
  middleName: "",
  lname: "",
  fatherName: "",
  cnic: "",
  gender: "",
  dob: "",
  address1: "",
  address2: "",
  city: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  picture: "",
};
export { validationSchema, initialValues };
