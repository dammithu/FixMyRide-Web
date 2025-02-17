import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Navbar from "./components/NavBar";
import AirportTransfer from "./Pages/AirportTransfer";
import Driver from "./Pages/Driver";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<AirportTransfer />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
