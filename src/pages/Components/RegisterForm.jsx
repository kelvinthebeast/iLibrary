import React, { useState } from "react";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    const newUser = { username, email, password, profilePic };
    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    if (storedUsers.find((u) => u.email === email)) {
      setError("Email already registered.");
      return;
    }

    storedUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));
    setSuccess("Registration successful! Please log in.");
    setUsername("");
    setEmail("");
    setProfilePic("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <input type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)} required />
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} required />
      <input type="url" placeholder="Profile Picture URL (optional)"
        value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};
