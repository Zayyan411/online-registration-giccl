import React from "react";
import {
  AdmissionBs,
  AdmissionIntermediate,
  ConferenceCards,
  DepartmentSection,
  ExaminationBs,
  ExaminationIntermediate,
  Footer,
  Header,
  TimeTableBs,
  TimeTableIntermediate,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, AdmissionForm, Blog, ContactUs, MainPage } from "./pages";

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
        <Route path="/bs-examinations" element={<ExaminationBs />} />
        <Route path="inter-admission" element={<AdmissionIntermediate />} />
        <Route path="bs-admission" element={<AdmissionBs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
