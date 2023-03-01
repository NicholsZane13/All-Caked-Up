import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-section">
          <h3>Company Name</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="right-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@company.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main Street, Anytown USA</li>
          </ul>
        </div>
      </div>
      <div className="bottom-bar">
        <p>🎂</p>
      </div>
    </footer>
  );
}

export default Footer;