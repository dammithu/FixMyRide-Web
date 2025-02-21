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
import Registerorlogin from "./Pages/Registerorlogin";
import PaymentDetails from "./Pages/PaymentDetails";
import Success from "./Pages/Success";
import Pending from "./Pages/Pending";
import MyAccount from "./Pages/MyAccount";
import Termsandcondition from "./Pages/Termsandcondition";
import Faq from "./Pages/Faq";
import Bookingsummary from "./Pages/Bookingsummary";
import Successtransfer from "./Pages/Sucesstransfer";
import Bookingerror from "./Pages/Bookingerror";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
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
          <Route path="/registerorlogin" element={<Registerorlogin />} />
          <Route path="/payment" element={<PaymentDetails />} />
          <Route path="/success" element={<Success />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/termsandcondition" element={<Termsandcondition />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/bookingsummary" element={<Bookingsummary />} />
          <Route path="/successtransfer" element={<Successtransfer />} />
          <Route path="/bookingerror" element={<Bookingerror />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
