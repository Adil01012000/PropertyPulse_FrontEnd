"use client";
import React, { useState, useEffect } from "react";

const ProperytyDescriptions = ({_id}) => {

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
  return (
    <>
      <p className="text mb10">
        {property_details.property_description}
      </p>
    </>
  );
};

export default ProperytyDescriptions;
