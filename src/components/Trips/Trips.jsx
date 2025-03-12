import React from "react";
import "./Trips.css";
import Footer from "./../Footer/Footer";

import honeymoon1 from "./../../assets/honeymoon1.jpg";
import honeymoon2 from "./../../assets/honeymoon2.jpg";
import honeymoon3 from "./../../assets/honeymoon3.jpg";
import family1 from "./../../assets/family1.jpg";
import family2 from "./../../assets/family2.jpg";
import family3 from "./../../assets/family3.jpg";
import adventure1 from "./../../assets/adventure1.jpg";
import adventure2 from "./../../assets/adventure2.jpg";
import adventure3 from "./../../assets/adventure3.jpg";
import culture1 from "./../../assets/culture1.jpg";
import culture2 from "./../../assets/culture2.jpg";
import culture3 from "./../../assets/culture3.jpg";
import safari1 from "./../../assets/safari1.jpg";
import safari2 from "./../../assets/safari2.jpg";
import safari3 from "./../../assets/safari3.jpg";
import eco1 from "./../../assets/eco1.jpg";
import eco2 from "./../../assets/eco2.jpg";
import eco3 from "./../../assets/eco3.jpg";
import luxury1 from "./../../assets/luxury1.jpg";
import luxury2 from "./../../assets/luxury2.jpg";
import luxury3 from "./../../assets/luxury3.jpg";
import beach1 from "./../../assets/beach1.jpg";
import beach2 from "./../../assets/beach2.jpg";
import beach3 from "./../../assets/beach3.jpg";
import wellness1 from "./../../assets/wellness1.jpg";
import wellness2 from "./../../assets/wellness2.jpg";
import wellness3 from "./../../assets/wellness3.jpg";
import culinary1 from "./../../assets/culinary1.jpg";
import culinary2 from "./../../assets/culinary2.jpg";
import culinary3 from "./../../assets/culinary3.jpg";

const PackageData = [
    {
        title: "Honeymoon Getaway",
        images: [
            honeymoon1,
            honeymoon2,
            honeymoon3
        ],
        description: "A romantic escape for newlyweds, featuring breathtaking destinations, luxury stays, and intimate experiences.",
        price: "$3,500 per couple",
    },
    {
        title: "Family Tour",
        images: [
            family1,
            family2,
            family3
        ],
        description: "Enjoy quality time with family in scenic locations, with fun-filled activities for all ages.",
        price: "$2,500 per family",
    },
    {
        title: "Adventure Trip",
        images: [
            adventure1,
            adventure2,
            adventure3
        ],
        description: "Thrilling experiences like hiking, skydiving, and water sports for adrenaline seekers.",
        price: "$2,000 per person",
    },
    {
        title: "Cultural Tour",
        images: [
            culture1,
            culture2,
            culture3
        ],
        description: "Explore the rich traditions and history of various communities through immersive experiences.",
        price: "$1,800 per person",
    },
    {
        title: "Wildlife Safari",
        images: [
            safari1,
            safari2,
            safari3
        ],
        description: "Experience Kenya's incredible wildlife with guided game drives and luxury lodges.",
        price: "$2,000 per person",
    },
    {
        title: "Eco-Tour",
        images: [
            eco1,
            eco2,
            eco3
        ],
        description: "Sustainable tourism options that allow you to explore nature responsibly.",
        price: "$1,600 per person",
    },
    {
        title: "Luxury Vacation",
        images: [
            luxury1,
            luxury2,
            luxury3
        ],
        description: "Indulge in world-class accommodations and exclusive experiences.",
        price: "$5,000 per person",
    },
    {
        title: "Beach Holiday",
        images: [
            beach1,
            beach2,
            beach3
        ],
        description: "Relax on pristine beaches, enjoy water sports, and unwind in beachfront resorts.",
        price: "$1,800 per person",
    },
    {
        title: "Wellness Retreat",
        images: [
            wellness1,
            wellness2,
            wellness3
        ],
        description: "Rejuvenate with yoga, spa treatments, and holistic wellness programs.",
        price: "$2,200 per person",
    },
    {
        title: "Culinary Tour",
        images: [
            culinary1,
            culinary2,
            culinary3
        ],
        description: "Discover diverse cuisines and participate in cooking classes with local chefs.",
        price: "$1,900 per person",
    }
];


export default function Trips () {
    return (
        <div className="packages-container">
            <h2>Our Travel Packages</h2>
            <p>Explore our specially curated packages designed to give you the best experiences.</p>

            <div className="package-grid">
                {PackageData.map((pkg, index) => (
                    <div className="package-card" key={index}>
                        <h3>{pkg.title}</h3>
                        <div className="image-container">
                            <img src={pkg.images[0]} alt={pkg.title} className="main-image" />
                            <div className="hover-images">
                                {pkg.images.slice(1).map((image, i) => (
                                    <img key={i} src={image} alt={pkg.title} />
                                ))}
                            </div>
                        </div>
                        <p className="package-description">{pkg.description}</p>
                        <p className="package-price">Starting from <strong>{pkg.price}</strong></p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
