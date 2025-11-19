import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./tailwind.css"; // optional - keep even if you don't use many tailwind classes
import "./styles.css";   // your original CSS (kept, updated below)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
