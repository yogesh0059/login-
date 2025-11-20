// login/src/App.js mein pura paste kar de

import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(null);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        setMsg(data.success ? "✅ Login successful!" : "❌ Invalid credentials");
        setSuccess(data.success);
      })
      .catch(() => {
        setMsg("Server error!");
        setSuccess(false);
      });
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#11998e,#38ef7d 60%,#0575e6 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#f9f9f9",
          padding: "35px 30px",
          borderRadius: 18,
          boxShadow: "0 6px 32px rgba(34,193,195,.15)",
          minWidth: 330,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{
          textAlign: "center",
          color: "#FF5722",
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: 18
        }}>Login</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          style={{
            marginBottom: 13,
            padding: "10px 14px",
            fontSize: 16,
            borderRadius: 9,
            border: "1.5px solid #aee1db",
            outline: "none",
            background: "#fff",
            boxShadow: "0 0.5px 4px rgba(20,220,120,0.03)"
          }}
          autoComplete="off"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{
            marginBottom: 16,
            padding: "10px 14px",
            fontSize: 16,
            borderRadius: 9,
            border: "1.5px solid #aee1db",
            outline: "none",
            background: "#fff",
            boxShadow: "0 0.5px 4px rgba(20,220,120,0.03)"
          }}
          required
        />

        <button type="submit"
          style={{
            padding: "10px 0",
            border: "none",
            borderRadius: 9,
            background: "linear-gradient(90deg,#ff9800,#ffe259)",
            color: "#33280d",
            fontWeight: "bold",
            fontSize: 17,
            cursor: "pointer",
            boxShadow: "0 1px 10px rgba(255,152,0,0.13)",
            transition: "background 0.2s"
          }}
        >
          Login
        </button>

        {msg &&
          <div style={{
            marginTop: 18,
            color: success ? "#28a745" : "#e53935",
            background: success ? "#dafbe1" : "#ffe4e6",
            borderRadius: 6,
            padding: "7px 0",
            textAlign: "center",
            fontWeight: 500,
            fontSize: 16
          }}>
            {msg}
          </div>
        }
      </form>
    </div>
  );
}

export default App;
