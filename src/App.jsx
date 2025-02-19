import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Navbar from "./components/NavBar";
import AirportTransfer from "./Pages/AirportTransfer";
import Driver from "./Pages/Driver";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import RiderSignup from "./Pages/RiderSignup";
import DriverSignup from "./Pages/DriverSignup";
import Business from "./Pages/Business";
import BookingInterface from "./components/BookingInterface";
import ServiceSelection from "./Pages/ServiceSelection";
import LTTripBooking from "./components/LTTripBooking";
import LTServiceSelection from "./Pages/LTServiceSelection";
import LocalTrip from "./Pages/LocalTrip";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<AirportTransfer />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rider-signup" element={<RiderSignup />} />
        <Route path="/business" element={<Business />} />
        <Route path="/serviceselection" element={<ServiceSelection />} />
        <Route path="/localtrip" element={<LocalTrip />} />
        <Route path="/ltserviceselection" element={<LTServiceSelection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
