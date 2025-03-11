import React from "react";
import "./Trips.css";
import PackageData from "./PackageData";

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
        </div>
    );
}
