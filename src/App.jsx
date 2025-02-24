// import components
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";

import Hireme from "./components/Hireme";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Layouts/Navbar";
import Education from "./components/Education/Education";
import Certificate from "./components/Certificate";
import ContactUs from "./components/ContactUs";
import Hero from "./components/hero";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Skills />
      <Service />
      <Projects />
      <Education/>
      <Hireme />
      <Certificate/>
     <ContactUs/>
      <footer className="p-3 text-center">
        <h6 className="mb-3">BHASKAR SINGH</h6>
        <p>BS Portfolio © All CopyRights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;