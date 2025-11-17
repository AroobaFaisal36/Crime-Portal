import React from "react";
import logo from "../assets/crimelogo.png";

export default function Report() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Crime Portal Logo" />
        </div>
        <h1>Report a Crime</h1>
      </header>

      <main>
        <h2>Submit Crime Report</h2>

        <form>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>CNIC:</label>
          <input type="text" placeholder="Enter your CNIC" required />

          <label>Gender:</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" /> Male</label>
            <label><input type="radio" name="gender" /> Female</label>
            <label><input type="radio" name="gender" /> Other</label>
          </div>

          <label>Age:</label>
          <input type="number" placeholder="Enter your age" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Contact:</label>
          <input type="text" placeholder="Enter phone number" required />

          <label>Crime Type:</label>
          <select>
            <option>Robbery</option>
            <option>Fraud</option>
            <option>Cybercrime</option>
            <option>Murder</option>
            <option>Harassment</option>
          </select>

          <label>Location:</label>
          <input type="text" placeholder="Enter location" required />

          <label>Description:</label>
          <textarea rows="5" placeholder="Describe what happened..."></textarea>

          <button type="submit">Submit Report</button>
        </form>
      </main>
    </>
  );
}
