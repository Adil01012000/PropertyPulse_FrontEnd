"use client";
import React, { useState, useEffect } from "react";

const PropertyAddress = ({_id}) => {

  const [property_details, setPropertyDetails] = useState([]);

  const getPropertyDetails = async () => {

    try {
      let pro = { _id }
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
  }, [])

  const addresses = [
    {
      address: property_details.property_address,
      city: property_details.property_city,
      state: property_details.property_state,
      country: property_details.property_country,
      zipCode: property_details.property_zip_code,
    },
  ];

  return (
    <>
      {addresses.map((address, index) => (
        <div
          key={index}
          className={`col-md-6 col-xl-4 ${index === 1 ? "offset-xl-2" : ""}`}
        >
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">Address</p>
              <p className="fw600 mb10 ff-heading dark-color">City</p>
              <p className="fw600 mb10 ff-heading dark-color">State</p>
              <p className="fw600 mb10 ff-heading dark-color">Country</p>
              <p className="fw600 mb10 ff-heading dark-color">Zip Code</p>
            </div>
            <div className="pd-list">
              <p className="text mb10">{address.address}</p>
              <p className="text mb10">{address.city}</p>
              <p className="text mb10">{address.state}</p>
              <p className="text mb10">{address.country}</p>
              <p className="text mb10">{address.zipCode}</p>
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default PropertyAddress;
