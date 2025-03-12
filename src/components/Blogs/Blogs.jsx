import React from "react";
import "./Blogs.css";

import aboutimg from "./../../assets/about.png";

export default function Blogs() {
    return (
    <div className="about-zaph">
        <div className="about-bgimg">
            <img src={aboutimg} alt="about img" />
        </div>
        <div className="about-content">
            <p><big>Best Safaris and Adventures.</big><br/>Welcome to Zaph Tours, Kenya's premier travel company, crafting unforgettable safaris and adventures. 
            We offer expertly curated packages that showcase the world's beauty and culture. With handpicked destinations, expert guides, and personalized itineraries, we ensure every journey is seamless, thrilling, and memorable. 
            Whether it's a wild safari, romantic escape or adrenaline adventure, we bring your dream trip to life.  
            Your adventure starts with Zaph Tours.</p>
            <h2>Explore. <small>Experience. </small>Enjoy.</h2>
            <div className="about">
                <p><i className="ri-building-4-line"></i>Accomodation</p>
                <p><i className="ri-car-line"></i>Transport</p>
                <p><i className="ri-magic-line"></i>Exclusive experiences</p>
                <p><i className="ri-instance-line"></i>Local recommendations</p>
                <p><i className="ri-pin-distance-line"></i>Personalized trips</p>
                <p><i className="ri-phone-line"></i>24/7 support</p>

            </div>
        </div>
    </div>
    
    )
}