import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Echooling.</h2>
          <p>There are course and event custom post types so you can easily create and manage course, events.</p>
          <p>📞 (402) 762 441 83</p>
          <p>📧 info@echooling.com</p>
        </div>
        <div className="footer-center">
          <h3>About Us</h3>
          <ul>
            <li>About</li>
            <li>Courses</li>
            <li>Events</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Newsletter</h3>
          <p>Get the latest news delivered to your inbox</p>
          <input type="email" placeholder="Enter your email" />
          <button>Send ➤</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 <span>Echooling.</span> All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
