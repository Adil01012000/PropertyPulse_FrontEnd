"use client";
import React, { useState, useEffect } from "react";

const PropertyFeaturesAminites = ({_id}) => {
  const [propertyDetails, setPropertyDetails] = useState([]);

  const getPropertyDetails = async () => {
    try {
      let pro = { _id };
      const response = await fetch("http://localhost:5000/api/property/getPropertyById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pro),
      });
      const data = await response.json();
      setPropertyDetails(data.property);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPropertyDetails();
  }, []);

  return (
    <>
      {propertyDetails.property_amenities && propertyDetails.property_amenities.map((item, index) => (
        <div key={index} className="col-sm-6 col-md-4">
          <div className="pd-list">
            <p className="text mb10">
              <i className="fas fa-circle fz6 align-middle pe-2" />
              {item}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
