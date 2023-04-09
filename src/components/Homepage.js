import React from "react";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Nav from "./Nav/Nav.js";
import Testimonials from "./Testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <Header />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default Homepage;
