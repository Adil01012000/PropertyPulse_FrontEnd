"use client";
import { useState } from "react";
import Select from "react-select";

const PropertyDescription = () => {

  const [property_title, setPropertyTitle] = useState("");
  const [property_description, setPropertyDescription] = useState("");
  const [property_purpose, setPropertyPurpose] = useState("");
  const [property_category, setPropertyCategory] = useState("");
  const [property_listed_in, setPropertyListedIn] = useState("");
  const [property_price, setPropertyPrice] = useState("");
  const [property_yearly_tax_rate, setPropertyYearlyTaxRate] = useState("");
  const [property_status, setPropertyStatus] = useState("");
  const [property_after_price_label, setPropertyAfterPriceLabel] = useState("");

  const propertyType = [
    { value: "propertyForSale", label: "Property For Sale" },
    { value: "propertyForRent", label: "Property For Rent" },
    { value: "landForSale", label: "Land for Sale" },
  ];

  const catergoryOptions = [
    { value: "House", label: "House" },
    { value: "Land", label: "Land" },
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Office" },
    { value: "Townhome", label: "Townhome" },
    { value: "Villa", label: "Villa" },
  ];
  const listedIn = [
    { value: "Active", label: "Active" },
    { value: "Sold", label: "Sold" },
    { value: "Processing", label: "Processing" },
  ];
  const PropertyStatus = [
    { value: "Pending", label: "Pending" },
    { value: "Processing", label: "Processing" },
    { value: "Published", label: "Published" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
            ? "#eb675312"
            : isFocused
              ? "#eb675312"
              : undefined,
      };
    },
  };

  function checker() {

    console.log(property_category,
      property_after_price_label,
      property_description,
      property_listed_in,
      property_price,
      property_purpose,
      property_status,
      property_title,
      property_yearly_tax_rate);
  }

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={property_title}
              onChange={(e) => setPropertyTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Description
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="There are many variations of passages."
              value={property_description}
              onChange={(e) => setPropertyDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Select Category
            </label>
            <div className="location-area">
              <Select
                name="colors"
                options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={property_category}
                onChange={(selectedOption) => setPropertyCategory(selectedOption)}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Listed in
            </label>
            <div className="location-area">
              <Select
                name="colors"
                options={listedIn}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={property_listed_in}
                onChange={(selectedOption) => setPropertyListedIn(selectedOption)}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Property Status
            </label>
            <div className="location-area">
              <Select
                name="colors"
                options={PropertyStatus}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={property_status}
                onChange={(selectedOption) => setPropertyStatus(selectedOption)}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Property Type
            </label>
            <div className="location-area">
              <Select
                name="colors"
                options={propertyType}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={property_purpose}
                onChange={(selectedOption) => setPropertyPurpose(selectedOption)}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Price in $
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={property_price}
              onChange={(e) => setPropertyPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Yearly Tax Rate
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={property_yearly_tax_rate}
              onChange={(e) => setPropertyYearlyTaxRate(e.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              After Price Label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              // value={property_after_price_label}
              // onChange={(e) => setPropertyAfterPriceLabel(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button className="ud-btn btn-thm" type="submit" onClick={checker}>
        Check <i className="fal fa-arrow-right-long" />
      </button>
    </form>
  );
};

export default PropertyDescription;
