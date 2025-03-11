import React from "react";
import "./Contacts.css";
import Footer from "./../Footer/Footer";

export default function Contacts() {
    return (
        <div className="contacts-page">
        <div className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h2>Contact Zaph Tours</h2>
                    <p>Have a question or need assistance? Reach out to us!</p>
                    <div className="contact-details">
                        <p><i className="ri-phone-line"></i> +254 712 345678</p>
                        <p><i className="ri-mail-line"></i> support@zaphtours.com</p>
                        <p><i className="ri-map-pin-line"></i> Nairobi, Kenya</p>
                    </div>
                    <div className="office-hours">
                        <h3>Office hours</h3>
                        <p><i className="ri-time-line"></i> Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p><i className="ri-time-line"></i> Sat: 9:00 AM - 2:00 PM</p>
                        <p><i className="ri-time-line"></i> Sun & Public holidays: Closed</p>
                    </div>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="map-container">
                <iframe
                    title="Zaph Tours Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.487932722344!2d36.8219!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a5b7a76ebd%3A0x548e7b77e6c24bcb!2sZaph%20Tours%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1614845704904!5m2!1sen!2ske"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </div>
            </div>
            <Footer />
        </div>
    );
}
