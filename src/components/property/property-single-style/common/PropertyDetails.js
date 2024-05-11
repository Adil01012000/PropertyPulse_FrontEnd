"use client";
import React, { useState, useEffect } from "react";

const PropertyDetails = ({_id}) => {

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

  const columns = [
    [
      {
        label: "Property Yearly Tax",
        value: property_details.property_yearly_tax_rate,
      },
      {
        label: "Price",
        value: property_details.property_price,
      },
      {
        label: "Property Size",
        value: property_details.property_size,
      },
      {
        label: "Bathrooms",
        value: property_details.property_baths,
      },
      {
        label: "Bedrooms",
        value: property_details.property_bedrooms,
      },
    ],
    [
      {
        label: "Garage",
        value: property_details.property_garage,
      },
      {
        label: "Garage Size",
        value: property_details.property_garage_size,
      },
      {
        label: "Year Built",
        value: property_details.property_year_built,
      },
      {
        label: "Property Type",
        value: property_details.property_category,
      },
      {
        label: "Property Status",
        value: property_details.property_status,
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
