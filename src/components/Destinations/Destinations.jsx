import React from "react";
import "./Destinations.css";
import Footer from "./../Footer/Footer";

const destinations = [
  {
    continent: "Africa",
    places: [
      { name: "Serengeti, Tanzania", image: "/assets/serengeti.jpg", description: "Witness the Great Migration and Africa’s diverse wildlife.", priceGroup: "$5,000", priceSolo: "$1,200" },
      { name: "Victoria Falls, Zambia", image: "/assets/victoria-falls.jpg", description: "Experience the mighty falls and thrilling adventure activities.", priceGroup: "$4,500", priceSolo: "$1,000" },
      { name: "Pyramids of Giza, Egypt", image: "/assets/pyramids.jpg", description: "Explore ancient wonders and rich history.", priceGroup: "$6,000", priceSolo: "$1,500" },
      { name: "Cape Town, South Africa", image: "/assets/cape-town.jpg", description: "Stunning beaches, Table Mountain, and vibrant culture.", priceGroup: "$4,200", priceSolo: "$1,100" },
      { name: "Marrakech, Morocco", image: "/assets/marrakech.jpg", description: "Colorful souks, palaces, and delicious cuisine.", priceGroup: "$3,800", priceSolo: "$900" },
      { name: "Zanzibar, Tanzania", image: "/assets/zanzibar.jpg", description: "Tropical beaches and rich Swahili culture.", priceGroup: "$4,000", priceSolo: "$1,000" },
    ],
  },
  {
    continent: "Asia",
    places: [
      { name: "Bali, Indonesia", image: "/assets/bali.jpg", description: "Paradise beaches, temples, and lush jungles.", priceGroup: "$3,500", priceSolo: "$800" },
      { name: "Kyoto, Japan", image: "/assets/kyoto.jpg", description: "Historic temples and stunning cherry blossoms.", priceGroup: "$4,000", priceSolo: "$1,200" },
      { name: "Maldives", image: "/assets/maldives.jpg", description: "Luxury overwater bungalows in crystal-clear waters.", priceGroup: "$6,500", priceSolo: "$2,000" },
      { name: "Great Wall, China", image: "/assets/great-wall.jpg", description: "One of the world’s greatest architectural feats.", priceGroup: "$4,800", priceSolo: "$1,300" },
      { name: "Petra, Jordan", image: "/assets/petra.jpg", description: "Ancient rock-cut city and rich Bedouin history.", priceGroup: "$4,500", priceSolo: "$1,100" },
      { name: "Phuket, Thailand", image: "/assets/phuket.jpg", description: "Famous beaches and vibrant nightlife.", priceGroup: "$3,700", priceSolo: "$900" },
    ],
  },

];

export default function Destinations() {
  return (
    <section className="destinations-container">
      <h1 className="page-title">Explore Our Top Destinations</h1>
      {destinations.map((continentData, index) => (
        <div key={index} className="continent-section">
          <h2 className="continent-title">{continentData.continent}</h2>
          <div className="destination-grid">
            {continentData.places.map((place, idx) => (
              <div key={idx} className="destination-card">
                <div className="image-container">
                  <img src={place.image} alt={place.name} className="destination-image" />
                  <div className="overlay">
                    <p className="destination-description">{place.description}</p>
                    <a href="#" className="details-button">View Details</a>
                  </div>
                </div>
                <h3>{place.name}</h3>
                <p className="price-info"><strong>Group:</strong> {place.priceGroup} | <strong>Solo:</strong> {place.priceSolo}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </section>
  );
}
