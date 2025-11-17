import React, { useState } from "react";
import logo from "../assets/crimelogo.png";

export default function Safety() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  const tips = [
    { title: "Be Aware", text: "Stay alert in public spaces..." },
    { title: "Travel Safe", text: "Use well-lit routes..." },
    { title: "Protect Information", text: "Do not share personal info..." },
    { title: "Emergency Contacts", text: "Keep numbers saved..." },
    { title: "Home Safety", text: "Always lock your doors..." },
    { title: "Public Transport Safety", text: "Stay alert in buses..." },
    { title: "Online Safety", text: "Avoid suspicious links..." },
    { title: "Trust Your Instincts", text: "If something feels wrong..." },
  ];

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Crime Portal Logo" />
        </div>
        <h1>Safety Tips</h1>
      </header>

      <main>
        <h2>How to Stay Safe</h2>

        <div className="accordion">
          {tips.map((t, i) => (
            <div key={i} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggle(i)}
              >
                {t.title}
              </button>

              <div
                className="accordion-content"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
