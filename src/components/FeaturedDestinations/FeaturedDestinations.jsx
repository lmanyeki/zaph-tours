import React from "react";
import "./FeaturedDestinations.css";

import mtKenya from "./../../assets/mt-kenya.jpg";
import mtRuwenzori from "./../../assets/mt-ruwenzori.jpg";
import lnakuru from "./../../assets/lake-nakuru.jpg";
import tsavo from "./../../assets/tsavo.jpg";
import nairobi from "./../../assets/nairobi-park.jpg";
import coast from "./../../assets/coastal-kenya.jpg";

const destinations = [
  {
    name: "Mt. Kenya",
    image: mtKenya,
    description: "Experience the thrill of Africa's second-highest peak, with breathtaking landscapes and diverse wildlife.",
    price: "From $1,500",
  },
  {
    name: "Mt. Ruwenzori",
    image: mtRuwenzori,
    description: "A paradise for climbers and hikers, with stunning glaciers and unique alpine flora.",
    price: "From $1,800",
  },
  {
    name: "Lake Nakuru",
    image: lnakuru,
    description: "Famous for its flamingos, rich biodiversity, and incredible game viewing opportunities.",
    price: "From $1,200",
  },
  {
    name: "Tsavo National Park",
    image: tsavo,
    description: "Home to Africa's iconic 'red elephants' and breathtaking savannah landscapes.",
    price: "From $1,600",
  },
  {
    name: "Nairobi National Park",
    image: nairobi,
    description: "A unique safari destination located just outside Nairobi, with an incredible variety of wildlife.",
    price: "From $900",
  },
  {
    name: "Coastal Kenya",
    image: coast,
    description: "Relax on pristine beaches and enjoy the Swahili culture and ocean adventures.",
    price: "From $1,400",
  },
];

export default function FeaturedDestinations() {
    return (
        <section className="featured-container">
            <h2 className="section-title">Featured <span>Destinations</span></h2>
            <p className="section-subtitle">Discover our top travel destinations and create unforgettable memories.</p>

        <div className="destinations-grid">
        {destinations.map((dest, index) => (
            <div className="destination-card" key={index}>
            <div className="image-container">
            <img src={dest.image} alt={dest.name} className="main-image" />
            <div className="overlay">
                <p className="destination-description">{dest.description}</p>
                <p className="destination-price">{dest.price}</p>
            </div>
            </div>
            <h3>{dest.name}</h3>
        </div>
        ))}
    </div>
    </section>
)
}
