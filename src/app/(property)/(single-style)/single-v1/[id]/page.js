"use client";
import React, { useState, useEffect } from "react";
// import { useRouter } from 'next/router';
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

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

      <DefaultHeader />

      <MobileMenu />

      <section className="pt60 pb90 bgc-f7">
        <div className="container">
          {/* <div className="row">
            <PropertyHeader id={params._id} />
          </div> */}

          <div className="row mb30 mt30">
          <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={property_details.property_image_one}
                thumbnail={property_details.property_image_one}
                width={610}
                height={510}
              >
                {({ ref, open }) => (
                  <Image
                    src={property_details.property_image_one}
                    width={591}
                    height={558}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6">
          <div className="row">
            {/* {images.map((image, index) => ( */}
              <div className="col-6 ps-sm-0">
                <div className="sp-img-content">
                  <div
                    className={`popup-img preview-img- sp-img mb10`}
                  >
                    <Item
                      original={property_details.property_image_two}
                      thumbnail={property_details.property_image_two}
                      width={270}
                      height={250}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={250}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={property_details.property_image_two}
                          alt={property_details.property_image_two}
                        />
                      )}
                    </Item>
                    <Item
                      original={property_details.property_image_three}
                      thumbnail={property_details.property_image_three}
                      width={270}
                      height={250}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={250}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={property_details.property_image_three}
                          alt={property_details.property_image_three}
                        />
                      )}
                    </Item>
                    <Item
                      original={property_details.property_image_four}
                      thumbnail={property_details.property_image_four}
                      width={270}
                      height={250}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={250}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={property_details.property_image_four}
                          alt={property_details.property_image_four}
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            {/* ))} */}
          </div>
        </div>
      </Gallery>
          </div>

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

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Property Description</h4>
                <p className="text mb10">
                  {property_details.property_description}
                </p>

                <h4 className="title fz17 mb30 mt50">Property Details</h4>
                <div className="row">
                  <div className="row">
                    {columns.map((column, columnIndex) => (
                      <div
                        key={columnIndex}
                        className={`col-md-6 col-xl-4${columnIndex === 1 ? " offset-xl-2" : ""
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
                </div>
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Address</h4>
                <div className="row">
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
                </div>
              </div>

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
