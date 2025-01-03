import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/register");

    // Here you could verify the token with an API, but it's skipped for simplicity
    setUser("User"); // Placeholder for user data
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome, {user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
