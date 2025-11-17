import React from "react";
import logo from "../assets/crimelogo.png";

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Crime Portal Logo" />
        </div>
        <h1>Crime Reporting Portal</h1>
      </header>

      <section className="banner">
        <h2>Together for a Safer Community</h2>
        <p>Report crime, protect lives, and create awareness.</p>
      </section>

      <main>
        <div className="welcome-text">
          <h2>Welcome to the Crime Reporting Portal</h2>
          <p>Your voice matters. Help make our community safer by reporting suspicious or criminal activities.</p>
        </div>

        <div className="card-container">
          <div className="card">
            <img src="https://img.icons8.com/color/96/000000/police-badge.png" alt="" />
            <h3>Report a Crime</h3>
            <p>Submit details anonymously and securely.</p>
          </div>
          <div className="card">
            <img src="https://img.icons8.com/color/96/000000/security-checked--v1.png" alt="" />
            <h3>Safety Tips</h3>
            <p>Learn how to stay safe and protect others.</p>
          </div>
          <div className="card">
            <img src="https://img.icons8.com/color/96/000000/siren.png" alt="" />
            <h3>Emergency</h3>
            <p>Call <strong>15</strong> in case of immediate danger.</p>
          </div>
        </div>
      </main>

      <section className="contact-bar">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> support@crimereporting.gov.pk</p>
        <p><strong>Helpline:</strong> 051-111-345-786</p>
        <p><strong>Address:</strong> Islamabad, Pakistan</p>
      </section>
    </>
  );
}
