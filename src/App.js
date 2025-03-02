import React from "react";
import { DepartmentSection, Footer, Header } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, AdmissionForm, Blog, ContactUs, MainPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/departments" element={<DepartmentSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
