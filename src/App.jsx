import React from "react";
import { NavbarWithMegaMenu } from "./Layout/Navbar";
import Banner from "./Layout/Banner";
import WhyUs from "./Layout/WhyUs";
import QuickFacts from "./Layout/QuickFacts";
import Program from "./Layout/Program";
import Popular from "./Layout/Popular";
import TopUniversity from "./Layout/TopUniversity";
import TalkToUs from "./Layout/TalkToUs";
import Requirement from "./Layout/Requirement";
import Exam from "./Layout/Exam";
import Documents from "./Layout/Documents";
import Statement from "./Layout/Statement";
import AtaGlance from "./Layout/AtaGlance";
import FAQ from "./Layout/FAQ";
import FooterSection from "./Layout/FooterSection";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <NavbarWithMegaMenu />
      <Banner />
      <WhyUs />
      <QuickFacts />
      <Program />
      <Popular />
      <TopUniversity />
      <Requirement />
      <Exam />
      <TalkToUs />
      <Documents />
      <Statement />
      <AtaGlance />
      <FAQ />
      <FooterSection />
    </div>
  );
};

export default App;
