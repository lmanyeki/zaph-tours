import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <div className="newsletter-nav">
            <div className="newsletter-content">
                <h2>Stay Updated on the best safaris & adventures</h2>
                <p>Subscribe to our newsletter and be the first to receive exclusive travel deals, tips and destination highlights.</p>
            </div>
            <div className="nl-form">
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
                <small>We respect your privacy. No spam, only amazing travel updates!</small>
            </div>
        </div>
    )
}