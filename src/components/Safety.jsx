import React, { useEffect, useState } from "react";

export default function Safety() {
  const [items, setItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    import("../data/content.json").then((d) => setItems(d.safety || []));
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <img src="/crimelogo.png" alt="Crime Portal Logo" />
        </div>
        <h1>Safety Tips</h1>
      </header>

      <main>
        <h2>How to Stay Safe</h2>
        <div className="accordion mt-4">
          {items.map((it, i) => (
            <div key={i} className="accordion-item">
              <button
                className={`accordion-header ${openIndex === i ? "active" : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {it.title}
              </button>
              <div className="accordion-content" style={{ maxHeight: openIndex === i ? "300px" : "0px" }}>
                <p>{it.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
