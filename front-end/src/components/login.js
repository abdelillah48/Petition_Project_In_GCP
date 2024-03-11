import React, { useState } from "react";

const loginContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  background: "#f3f4f6",
  padding: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
};

const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "5px",
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: "5px",
};

const buttonStyle = {
  padding: "10px",
  border: "none",
  backgroundColor: "#007BFF",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("add endpoint link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        alert("Login successful!");
        console.log("Login successful:", data);
        // Handle login success
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
        console.error("Login error:", error);
      });
  };

  return (
    <div style={loginContainerStyle}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
