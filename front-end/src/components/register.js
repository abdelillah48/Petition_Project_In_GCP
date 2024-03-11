import React, { useState } from "react";

const registrationContainerStyle = {
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

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    fetch("add endpoint link", {
      // Replace with your registration endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration successful:", data);
        // Handle registration success
      })
      .catch((error) => {
        console.error("Registration error:", error);
        // Handle registration failure
      });
  };

  return (
    <div style={registrationContainerStyle}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <label style={labelStyle}>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
