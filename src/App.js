import About from "./components/About/About.js"
import Header from "./components/Header/Header/Header";
import Main from "./components/Main/Main.js/Main";
import Footer from "./components/Footer/Footer.js/Footer";
import Testimonials from "./components/Testimonials/Testimonials/Testimonials.js";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.js";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Header />} />
        <Route path="menu" element={<Main />} />
        <Route path="/reserve" element={<Testimonials />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
