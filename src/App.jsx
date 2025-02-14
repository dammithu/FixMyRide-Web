import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Navbar from "./components/NavBar";
import AirportBookingAd from "./Pages/AirportBookingAd";
// import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<AirportBookingAd/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
