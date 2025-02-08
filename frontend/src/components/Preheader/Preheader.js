import React, { useState } from "react";
import "./Preheader.css"; // Import CSS for styling

const Preheader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sample product suggestions
  const products = ["Laptop", "Smartphone", "Headphones", "Camera", "Shoes", "Watch"];

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === "") {
      setSuggestions([]);
    } else {
      const filtered = products.filter((item) => item.toLowerCase().includes(value));
      setSuggestions(filtered);
    }
  };

  // Select a suggestion
  const selectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  // Toggle account dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="preheader">
      {/* Logo */}
      <div className="logo">YourLogo</div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search products..."
        />
        <button className="search-btn">🔍</button>

        {/* Search Suggestions */}
        {suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((item, index) => (
              <div key={index} onClick={() => selectSuggestion(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Account Section */}
      <div className="account">
        <button className="account-btn" onClick={toggleDropdown}>
          person logo 
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="dropdown">
            <a href="#">Customer</a>
            <a href="#">Retailer</a>
            <a href="#">Orders</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Preheader;
