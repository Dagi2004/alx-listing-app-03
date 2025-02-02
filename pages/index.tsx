import React from "react";

import { PROPERTYLISTINGSAMPLE } from "../constants"; // Adjust the import path if necessary
const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Property Listings</h1>
      <div className="property-listing-container">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div key={property.name} className="property-card">
            <img
              src={property.image}
              alt={property.name}
              width={500}
              height={500}
              className="property-image"
            />
            <h2>{property.name}</h2>
            <p>Price: ${property.price}</p>
            <p>Rating: {property.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
