"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const FeaturedListings = ({data,colstyle}) => {

  const [properties, setProperties] = useState([]);

  const getProperties = async () => {

    try {
      const response = await fetch("http://localhost:5000/api/property/getProperty", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, [])

  return (
    <>
      {properties.map((listing) => (
        <div className={` ${colstyle ? 'col-sm-12':'col-sm-6 col-lg-6'}  `} key={listing._id}>
          <div className={colstyle ? "listing-style1 listCustom listing-type" : "listing-style1"}    >
            <div className="list-thumb" >
              <Image
                width={382}
                height={248}
                style={{height:'230px'}}
                className="w-100  cover"
                // src={'../images/background/contact-us.jpg'}
                alt="listings"
              />


              <div className="list-price">
                {listing.property_price} / <span>mo</span>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link  href={`/single-v1/${listing._id}`}>{listing.property_title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.property_bedrooms} bed
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.property_baths} bath
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.property_size} sqft
                </a>
              </div>
              <hr className="mt-2 mb-2" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
