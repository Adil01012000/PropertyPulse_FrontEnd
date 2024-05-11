"use client";
import React, { useState, useEffect } from "react";

const OverView = ({ _id }) => {
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

  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: property_details.property_bedrooms,
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: property_details.property_baths,
    },
    {
      icon: "flaticon-event",
      label: "Year Built",
      value: property_details.property_year_built,
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: property_details.property_garage,
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "Sqft",
      value: property_details.property_size,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: property_details.property_category,
    },
  ];


  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
