import React from "react";
import { Container } from "react-bootstrap";

const AdmissionSteps = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold">Steps for Intermediate Admissions</h2>
      <p className="text-center">
        Mobirise is a free offline app for Windows and Mac to easily create
        small/medium websites, landing pages, online resumes and portfolios.
        2500+ beautiful website blocks, templates and themes help you to start
        easily.
      </p>

      <div className="d-flex flex-column align-items-center">
        {[
          {
            step: "1",
            title: "Submit Admission Form",
            description:
              "Apply online using OCAS Online College Admission System or Submit Admission Form in College.",
          },
          {
            step: "2",
            title: "Appear before Admission Committee",
            description:
              "On merit candidates will appear before the concerned admission committee for an interview along with mentioned documents and will get a fee challan.",
          },
          {
            step: "3",
            title: "Deposit Fee",
            description:
              "Deposit fee in the Bank of Punjab counter present in the college.",
          },
          {
            step: "4",
            title: "Get Roll No",
            description:
              "Get Roll No from the same admission committee on submitted challan.",
          },
        ].map((item, index) => (
          <div key={index} className="text-center my-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#1e88e5",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                margin: "auto",
              }}
            >
              {item.step}
            </div>
            <h5 className="fw-bold mt-2">{item.title}</h5>
            <p className="text-center px-3">{item.description}</p>
            {index !== 3 && <span className="fs-1">↓</span>}
          </div>
        ))}
      </div>
    </Container>
  );
};

export { AdmissionSteps };
