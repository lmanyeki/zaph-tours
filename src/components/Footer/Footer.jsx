import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer () {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <div className="footer-logo">
          <a href="/">Zaph Tours</a>
        </div>
        <div className="social-icons">
          <i className="ri-facebook-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-youtube-line"></i>
        </div>
      </div>
      <div className="footer-btm">
        <div className="footer-links">
          <ul className="nav-footer">
          <li><Link to="/">Home</Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/trips">Trips</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="footer">Continents</h3>
          <ul>
            <li><a href="#">Africa</a></li>
            <li><a href="#">Asia</a></li>
            <li><a href="#">Europe</a></li>
            <li><a href="#">Latin America</a></li>
            <li><a href="#">USA</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="footer">Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#contact">Contact us</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Request a quote</a></li>
            <li><a href="#">Recommendations</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3 className="footer">Our Newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia dolorum voluptate quis officia qui.</p>
          <div className="input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  )
}