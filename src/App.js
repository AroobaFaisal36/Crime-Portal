import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Report from "./components/Report";
import Safety from "./components/Safety";

export default function App() {
  return (
    <Router>
      <div className="container app-bg">
        <Navbar />
        <main className="px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/safety" element={<Safety />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
