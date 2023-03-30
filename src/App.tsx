import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Topbar from "./components/Topbar";
import Logo from "./components/Logo";
import Faq from "./components/FAQ";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import FooterColumn from "./components/FooterColumn";
import FooterSocials from "./components/FooterSocials";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Consultation from "./components/Consultation";
import DriveSoftware from "./components/DriveSoftware";
import DrivePartnerships from "./components/DrivePartnerships";

export default function App() {
  return (
    <div>
      <Topbar />
      <Hero />
      <Projects />
      <DriveSoftware />
      <DrivePartnerships />
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      {/* <Faq /> */}
      {/* <Partners /> */}
      <Consultation />
      <Footer />
    </div>
  );
}
