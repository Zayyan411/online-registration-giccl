import React from "react";
import {
  AdmissionBs,
  AdmissionIntermediate,
  BsPropectus,
  ConferenceCards,
  DepartmentSection,
  ExaminationBs,
  ExaminationIntermediate,
  FeeRules,
  Footer,
  Header,
  MeritLists,
  TimeTableBs,
  TimeTableIntermediate,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  AdmissionForm,
  Blog,
  ContactUs,
  ForgotPasswordPage,
  LoginPage,
  MainPage,
  RegistrationForm,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/departments" element={<DepartmentSection />} />
        <Route path="/conferences" element={<ConferenceCards />} />
        <Route path="/inter-timetable" element={<TimeTableIntermediate />} />
        <Route path="/bs-timetable" element={<TimeTableBs />} />
        <Route
          path="/inter-examinations"
          element={<ExaminationIntermediate />}
        />
        {/* bs admission routes  */}
        <Route path="/bs-examinations" element={<ExaminationBs />} />
        <Route path="/inter-admission" element={<AdmissionIntermediate />} />
        <Route path="/bs-admission" element={<AdmissionBs />} />
        <Route path="/bs-prospectus" element={<BsPropectus />} />
        <Route path="/bs-fees" element={<FeeRules />} />
        <Route path="/merit-list" element={<MeritLists />} />
        {/* authentication routes  */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegistrationForm />} />
        <Route path="/forget-password" element={<ForgotPasswordPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
