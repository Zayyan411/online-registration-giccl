import React, { createContext, useEffect, useState } from "react";
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
  Blog,
  ContactUs,
  DashboardForm,
  ForgotPasswordPage,
  LoginPage,
  MainPage,
  RegistrationForm,
  ResetPasswordPage,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ActiveContext = createContext();
const App = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const value = { user, setUser };
  return (
    <ActiveContext.Provider value={value}>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
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
          <Route path="/dashboard" element={<DashboardForm />} />
          {/* authentication routes  */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegistrationForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ActiveContext.Provider>
  );
};

export default App;
