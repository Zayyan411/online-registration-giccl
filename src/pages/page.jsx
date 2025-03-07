import React from "react";
import { CollegeOverview, Home, JournalCard, PrincipalMessage } from "./home";
import { ContactUs } from "./contact-us";
import { About } from "./about";
import { LatestEvents } from "./home/latest-events";

const MainPage = () => {
  return (
    <div className="flex flex-column gap-2">
      <Home />
      <LatestEvents />
      <About />
      <PrincipalMessage />
      <CollegeOverview />
      <JournalCard />
      <ContactUs />
    </div>
  );
};

export { MainPage };
