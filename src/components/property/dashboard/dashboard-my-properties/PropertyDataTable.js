"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Tooltip as ReactTooltip } from "react-tooltip";

const PropertyDataTable = () => {
  const [properties, setProperties] = useState([]);

  const userId = sessionStorage.getItem("userId");

  const getProperties = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/property/getPropertyByUserId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId })
      });
      const data = await response.json();
      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProperty = async (_id) => {
    let data = { _id };

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch("http://localhost:5000/api/property/deleteProperty", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('API Success');
        getProperties();
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  };

  useEffect(() => {
    getProperties();
  }, []);

  const getStatusStyle = (property_status) => {
    switch (property_status) {
      case "Pending":
        return "pending-style style1";
      case "Published":
        return "pending-style style2";
      case "Processing":
        return "pending-style style3";
      default:
        return "";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Listing title</th>
          <th scope="col">Date Published</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {properties.length === 0 ? (
          <tr>
            <td colSpan="4">There are no properties listed.</td>
          </tr>
        ) : (
          properties.map((property) => (
            <tr key={property.id}>
              <th scope="row">
                <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                  <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                    <div className="h6 list-title">
                      <Link href={`/single-v1/${property._id}`}>{property.property_title}</Link>
                    </div>
                    <div className="list-price">
                      <a>&#163; {property.property_price}</a>
                    </div>
                  </div>
                </div>
              </th>
              <td className="vam">{formatDate(property.createdAt)}</td>
              <td className="vam">
                <span className={getStatusStyle(property.property_status)}>
                  {property.property_status}
                </span>
              </td>
              <td className="vam">
                <div className="d-flex">
                  <button
                    className="icon"
                    style={{ border: "none" }}
                    data-tooltip-id={`delete-${property._id}`}
                    onClick={() => deleteProperty(property._id)}
                  >
                    <span className="flaticon-bin" />
                  </button>
                  <ReactTooltip
                    id={`delete-${property._id}`}
                    place="top"
                    content="Delete"
                  />
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default PropertyDataTable;
