import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <a href="/" className="logo">
          <span className="logo-icon">F</span> FASHION
        </a>

        {/* Navigation Links */}
        <nav className="nav">
          <a href="/">CATALOGUE</a>
          <a href="/">FASHION</a>
          <a href="/">FAVOURITE</a>
          <a href="/">LIFESTYLE</a>
        </nav>

        {/* Sign-Up Button */}
        <a href="/signup" className="signup-btn">SIGN UP</a>
      </div>
    </header>
  );
};

export default Header;
