import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.js";
import BookingPage from './components/Bookingpage/Bookingpage.js';
import ConfirmedBooking from "./components/Bookingpage/ConfirmationPage/ConfirmedBooking.js";
import Nav from "./components/Nav/Nav.js";
import About from "./components/About/About.js";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
        <Route exact path="/booking-confirmed" element={<ConfirmedBooking/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Main />} />
        <Route path="/reserve" element={<Testimonials />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
