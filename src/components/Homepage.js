import React from "react";
import About from "./About/About/About";
import Footer from "./Footer/Footer/Footer";
import Header from "./Header/Header/Header";
import Main from "./Main/Main/Main";
import Nav from "./Nav/Nav/Nav.js";
import Testimonials from "./Testimonials/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Testimonials />
      <About />

      <Footer />
    </>
  );
};

export default Homepage;
