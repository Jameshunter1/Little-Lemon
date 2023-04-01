import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.js";
import BookingPage from "./components/Bookingpage/BookingPage.js";
import ConfirmedBooking from "./components/Bookingpage/ConfirmationPage/ConfirmedBooking.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Header />} />
        <Route path="/menu" element={<Main />} />
        <Route path="/reserve" element={<Testimonials />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
