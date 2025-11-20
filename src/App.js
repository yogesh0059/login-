// src/App.js me pura paste karde

import React, { useState } from "react";

const DUMMY_USER = {
  username: "admin",
  password: "1234"
};

function App() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
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
    if (
      form.username === DUMMY_USER.username &&
      form.password === DUMMY_USER.password
    ) {
      setMsg("✅ Login successful!");
      setSuccess(true);
    } else {
      setMsg("❌ Invalid credentials");
      setSuccess(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#6a11cb,#2575fc)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "32px 28px",
          borderRadius: 16,
          boxShadow: "0 6px 24px rgba(81,90,232,.10)",
          minWidth: 320,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{
          textAlign: "center",
          color: "#2575fc",
          fontWeight: 700,
          marginBottom: 20
        }}>Login</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          style={{
            marginBottom: 12,
            padding: "9px 12px",
            fontSize: 16,
            borderRadius: 7,
            border: "1px solid #ccd",
            outline: "none"
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
            marginBottom: 15,
            padding: "9px 12px",
            fontSize: 16,
            borderRadius: 7,
            border: "1px solid #ccd",
            outline: "none"
          }}
          required
        />

        <button type="submit"
          style={{
            padding: "10px 0",
            border: "none",
            borderRadius: 7,
            background: "#2575fc",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 17,
            cursor: "pointer",
            boxShadow: "0 1px 10px rgba(81,90,232,.10)"
          }}
        >
          Login
        </button>

        {msg &&
          <div style={{
            marginTop: 18,
            color: success ? "green" : "red",
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
