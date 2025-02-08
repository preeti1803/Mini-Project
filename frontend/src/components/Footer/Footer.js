import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>FASHION</h2>
        <p>Complete your style with awesome clothes from us.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Share Location</a></li>
            <li><a href="#">Orders Tracking</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
