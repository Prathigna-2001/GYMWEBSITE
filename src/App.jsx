import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Hero";
import Programs from "./components/Programs";
import Trainers from "./components/Trainer";
import Contact from "./components/Contact";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
