import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Report from "./components/Report";
import Safety from "./components/Safety";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/report">Report Crime</Link>
          <Link to="/safety">Safety Tips</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/safety" element={<Safety />} />
        </Routes>

        <footer>
          <p>© 2025 Crime Reporting Portal | Stay Safe</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
