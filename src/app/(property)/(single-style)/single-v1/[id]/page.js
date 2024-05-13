"use client";
import React, { useState, useEffect } from "react";
// import { useRouter } from 'next/router';
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import PropertyGallery from "@/components/property/property-single-style/single-v1/PropertyGallery";

const SingleV1 = ({ params }) => {
  const [property_details, setPropertyDetails] = useState({});

  const { id } = params;

  useEffect(() => {
    console.log(id);
  });
  

  const getPropertyDetails = async () => {

    try {
      let pro = { _id: id }
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

      <DefaultHeader />

      <MobileMenu />

      <section className="pt60 pb90 bgc-f7">
        <div className="container">
          {/* <div className="row">
            <PropertyHeader id={params._id} />
          </div>

          <div className="row mb30 mt30">
            <PropertyGallery id={params._id} />
          </div> */}

          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Overview</h4>
                <div className="row">
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
                </div>
              </div>

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Property Description</h4>
                <ProperytyDescriptions id={params._id} />

                <h4 className="title fz17 mb30 mt50">Property Details</h4>
                <div className="row">
                  <PropertyDetails id={params._id} />
                </div>
              </div> */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Address</h4>
                <div className="row">
                  <PropertyAddress id={params._id} />
                </div>
              </div> */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Features &amp; Amenities</h4>
                <div className="row">
                  <PropertyFeaturesAminites id={params._id} />
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </section>

      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>

    </>
  );
};

export default SingleV1;
