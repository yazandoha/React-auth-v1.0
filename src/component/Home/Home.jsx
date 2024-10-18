import React from 'react'
import './Home.css';
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Our Website!</h1>
        <p className="home-text">
          We are glad to have you here. Explore our website to learn more about what we do.
        </p>
        <button className="home-button">Learn More</button>
      </div>
    </div>
  );
}
