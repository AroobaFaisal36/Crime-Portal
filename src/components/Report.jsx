import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Report() {
  const [form, setForm] = useState({
    name: "",
    cnic: "",
    gender: "",
    age: "",
    email: "",
    contact: "",
    crimeType: "Robbery",
    location: "",
    description: ""
  });
  const [loading, setLoading] = useState(false);

  const handle = (e) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "crimeReports"), { ...form, createdAt: new Date().toISOString() });
      alert("Report saved to Firestore.");
      setForm({ name: "", cnic: "", gender: "", age: "", email: "", contact: "", crimeType: "Robbery", location: "", description: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to save — check Firebase config and Firestore rules.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="/crimelogo.png" alt="Crime Portal Logo" />
        </div>
        <h1>Report a Crime</h1>
      </header>

      <main>
        <h2>Submit Crime Report</h2>
        <form onSubmit={submit}>
          <label>Full Name:</label>
          <input id="name" value={form.name} onChange={handle} type="text" placeholder="Enter your name" required />

          <label>CNIC:</label>
          <input id="cnic" value={form.cnic} onChange={handle} type="text" placeholder="Enter your CNIC" required />

          <label>Gender:</label>
          <div className="gender-options">
            <label><input id="gender" type="radio" name="gender" value="male" checked={form.gender==="male"} onChange={handle}/> Male</label>
            <label><input id="gender" type="radio" name="gender" value="female" checked={form.gender==="female"} onChange={handle}/> Female</label>
            <label><input id="gender" type="radio" name="gender" value="other" checked={form.gender==="other"} onChange={handle}/> Other</label>
          </div>

          <label>Age:</label>
          <input id="age" value={form.age} onChange={handle} type="number" placeholder="Enter your age" required />

          <label>Email:</label>
          <input id="email" value={form.email} onChange={handle} type="email" placeholder="Enter your email" required />

          <label>Contact:</label>
          <input id="contact" value={form.contact} onChange={handle} type="text" placeholder="Enter phone number" required />

          <label>Crime Type:</label>
          <select id="crimeType" value={form.crimeType} onChange={handle}>
            <option>Robbery</option><option>Assault</option><option>Fraud</option><option>Cybercrime</option><option>Other</option>
          </select>

          <label>Location:</label>
          <input id="location" value={form.location} onChange={handle} type="text" placeholder="Enter location" required />

          <label>Description:</label>
          <textarea id="description" value={form.description} onChange={handle} rows="5" placeholder="Describe what happened..." />

          <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit Report"}</button>
        </form>
      </main>
    </>
  );
}
