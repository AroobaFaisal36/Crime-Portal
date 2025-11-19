import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/crimelogo.png";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [theme, setTheme] = useTheme();
  const loc = useLocation();
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <header className="bg-[#222] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10" />
          <div>
            <h1 className="font-bold text-lg">Crime Reporting Portal</h1>
            <p className="text-xs opacity-80">Community safety — report & learn</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link className={`hover:text-red-400 ${loc.pathname==='/'?'underline':''}`} to="/">Home</Link>
          <Link className={`hover:text-red-400 ${loc.pathname==='/report'?'underline':''}`} to="/report">Report</Link>
          <Link className={`hover:text-red-400 ${loc.pathname==='/safety'?'underline':''}`} to="/safety">Safety</Link>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4 bg-gray-700 px-3 py-1 rounded"
          >
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>

          <div className="text-sm opacity-90">⭐ {favorites.length}</div>
        </nav>
      </div>
    </header>
  );
}
