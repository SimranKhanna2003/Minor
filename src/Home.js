import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
// import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
// import Signup from "./Signup";
// import Login from "../src/login";


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      {/* <Aboutus /> */}
      <Services />
      <Contact />
      {/* <Signup /> */}
      {/* <Login /> */}
      <Footer />
    </>
  );
};

export default Home;
