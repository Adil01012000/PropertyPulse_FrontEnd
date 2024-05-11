"use client";
import { React, useState, useRef } from "react";
import Select from "react-select";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";

const AddPropertyTabContent = () => {

  const userId = sessionStorage.getItem("userId");

  const [property_title, setPropertyTitle] = useState("");
  const [property_description, setPropertyDescription] = useState("");
  const [property_purpose, setPropertyPurpose] = useState("");
  const [property_category, setPropertyCategory] = useState("");
  const [property_listed_in, setPropertyListedIn] = useState("");
  const [property_price, setPropertyPrice] = useState("");
  const [property_yearly_tax_rate, setPropertyYearlyTaxRate] = useState("");
  const [property_status, setPropertyStatus] = useState("");
  const [property_after_price_label, setPropertyAfterPriceLabel] = useState("");
  const [property_address, setPropertyAddress] = useState("");
  const [property_state, setPropertyState] = useState("");
  const [property_country, setPropertyCountry] = useState("");
  const [property_city, setPropertyCity] = useState("");
  const [property_zip_code, setPropertyZipCode] = useState("");
  const [property_size, setPropertySize] = useState("");
  const [property_rooms, setPropertyRooms] = useState("");
  const [property_bedrooms, setPropertyBedrooms] = useState("");
  const [property_baths, setPropertyBaths] = useState("");
  const [property_garage, setPropertyGarage] = useState("");
  const [property_garage_size, setPropertyGarageSize] = useState("");
  const [property_year_built, setPropertyYearBuilt] = useState("");
  const [property_basement, setPropertyBasement] = useState("");

  const createProperty = async () => {
    let data = {
      user_id: userId, property_title, property_description, property_purpose: property_purpose.value, 
      property_category: property_category.value, property_listed_in: property_listed_in.value, property_price, property_yearly_tax_rate, 
      property_status: property_status.value, property_after_price_label, property_address, property_state: property_state.value, 
      property_country: property_country.value, property_city: property_city.value, property_zip_code, property_size, property_rooms, 
      property_bedrooms, property_baths, property_garage: property_garage.value, property_garage_size, 
      property_year_built, property_basement: property_basement.value
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch("http://localhost:5000/api/property/createProperty", requestOptions);
      if (!response.ok) {
        throw new Error('Failed to create property');
      }
      const responseData = await response.json();
      window.location.href = '/dashboard-home';
    } catch (error) {
      console.error('Error:', error.message);
    }
};


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

  const PropertyState = [
    { value: "England", label: "England" },
    { value: "Scotland", label: "Scotland" },
    { value: "Wales", label: "Wales" },
    { value: "Northern Island", label: "Northern Island" }
  ];

  const PropertyCountry = [
    { value: "UK", label: "UK" },
  ];

  const PropertyCity = [
    { value: "London", label: "London" },
    { value: "Manchester", label: "Manchester" },
    { value: "Birmingham", label: "Birmingham" },
    { value: "Liverpool", label: "Liverpool" },
    { value: "Bristol", label: "Bristol" },
    { value: "Leeds", label: "Leeds" },
    { value: "Edinburgh", label: "Edinburgh" },
    { value: "Glasgow", label: "Glasgow" },
    { value: "Aberdeen", label: "Aberdeen" },
    { value: "Dundee", label: "Dundee" },
    { value: "Cardiff", label: "Cardiff" },
    { value: "Swansea", label: "Swansea" },
    { value: "Newport", label: "Newport" },
    { value: "Bangor", label: "Bangor" },
    { value: "Belfast", label: "Belfast" },
    { value: "Derry/Londonderry", label: "Derry/Londonderry" },
    { value: "Lisburn", label: "Lisburn" },
    { value: "Newry", label: "Newry" },
  ];

  const GarageOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ]

  const BasementOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ]

  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleUpload = (files) => {
    const newImages = [...uploadedImages];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setUploadedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleUpload(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleButtonClick = () => {
    // Programmatically trigger the hidden file input
    fileInputRef.current.click();
  };

  const handleDelete = (index) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

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

  const checker = () => {
    console.log('Checker Called');
  };


  const amenitiesData = {
    column1: [
      { label: "Attic", defaultChecked: false },
      { label: "Basketball court", defaultChecked: true },
      { label: "Air Conditioning", defaultChecked: true },
      { label: "Lawn", defaultChecked: true },
      { label: "Swimming Pool", defaultChecked: false },
      { label: "Barbeque", defaultChecked: false },
      { label: "Microwave", defaultChecked: false },
    ],
    column2: [
      { label: "TV Cable", defaultChecked: false },
      { label: "Dryer", defaultChecked: true },
      { label: "Outdoor Shower", defaultChecked: true },
      { label: "Washer", defaultChecked: true },
      { label: "Gym", defaultChecked: false },
      { label: "Ocean view", defaultChecked: false },
      { label: "Private space", defaultChecked: false },
    ],
    column3: [
      { label: "Lake view", defaultChecked: false },
      { label: "Wine cellar", defaultChecked: true },
      { label: "Front yard", defaultChecked: true },
      { label: "Refrigerator", defaultChecked: true },
      { label: "WiFi", defaultChecked: false },
      { label: "Laundry", defaultChecked: false },
      { label: "Sauna", defaultChecked: false },
    ],
  };

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab2" role="tablist">
          <button
            className="nav-link active fw600 ms-3"
            id="nav-item1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item1"
            type="button"
            role="tab"
            aria-controls="nav-item1"
            aria-selected="true"
          >
            1. Description
          </button>
          <button
            className="nav-link fw600"
            id="nav-item2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item2"
            type="button"
            role="tab"
            aria-controls="nav-item2"
            aria-selected="false"
          >
            2. Media
          </button>
          <button
            className="nav-link fw600"
            id="nav-item3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item3"
            type="button"
            role="tab"
            aria-controls="nav-item3"
            aria-selected="false"
          >
            3. Location
          </button>
          <button
            className="nav-link fw600"
            id="nav-item4-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item4"
            type="button"
            role="tab"
            aria-controls="nav-item4"
            aria-selected="false"
          >
            4. Detail
          </button>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        {/* Property Description Starts */}
        <div
          className="tab-pane fade show active"
          id="nav-item1"
          role="tabpanel"
          aria-labelledby="nav-item1-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Property Description</h4>

            <form className="form-style1">
              <div className="row">
                <div className="col-sm-12">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Property Title"
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
                      placeholder="Write Description of Property (at least 100 words)"
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
                        classNamePrefix="select category"
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
                        classNamePrefix="select listed in"
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
                        classNamePrefix="select property status"
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
                        classNamePrefix="select property type"
                        required
                        value={property_purpose}
                        onChange={(selectedOption) => setPropertyPurpose(selectedOption )}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb30">
                    <label className="heading-color ff-heading fw600 mb10">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Property Price Name"
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
                      placeholder="Enter Property Yearly Tax Rate"
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
                      placeholder="Enter Property After Price Label"
                      value={property_after_price_label}
                      onChange={(e) => setPropertyAfterPriceLabel(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Property Description Ends */}

        {/* Property Upload Media Starts */}
        <div
          className="tab-pane fade"
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab"
        >

          <div
            className="upload-img position-relative overflow-hidden bdrs12 text-center mb30 px-2"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="icon mb30">
              <span className="flaticon-upload" />
            </div>
            <h4 className="title fz17 mb10">Upload/Drag photos of your property</h4>
            <p className="text mb25">
              Photos must be JPEG or PNG format and at least 2048x768
            </p>
            <label className="ud-btn btn-white">
              Browse Files
              <input
                ref={fileInputRef}
                id="fileInput"
                type="file"
                multiple
                className="ud-btn btn-white"
                onChange={(e) => handleUpload(e.target.files)}
                style={{ display: "none" }}
              />
            </label>
          </div>

          {/* Display uploaded images */}
          <div className="row profile-box position-relative d-md-flex align-items-end mb50">
            {uploadedImages.map((imageData, index) => (
              <div className="col-2" key={index}>
                <div className="profile-img mb20 position-relative">
                  <Image
                    width={212}
                    height={194}
                    className="w-100 bdrs12 cover"
                    src={imageData}
                    alt={`Uploaded Image ${index + 1}`}
                  />
                  <button
                    style={{ border: "none" }}
                    className="tag-del"
                    title="Delete Image"
                    onClick={() => handleDelete(index)}
                    type="button"
                    data-tooltip-id={`delete-${index}`}
                  >
                    <span className="fas fa-trash-can" />
                  </button>

                  <ReactTooltip
                    id={`delete-${index}`}
                    place="right"
                    content="Delete Image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Property Upload Media Ends */}

        {/* Property Location Starts */}
        <div
          className="tab-pane fade"
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Listing Location</h4>
            <form className="form-style1">
              <div className="row">
                <div className="col-sm-12">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Address"
                      value={property_address}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      City
                    </label>
                    <div className="location-area">
                      <Select
                        name="colors"
                        options={PropertyCity}
                        styles={customStyles}
                        className="select-custom pl-0"
                        classNamePrefix="select property type"
                        required
                        value={property_city}
                        onChange={(selectedOption) => setPropertyCity(selectedOption)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      State
                    </label>
                    <div className="location-area">
                      <Select
                        name="colors"
                        options={PropertyState}
                        styles={customStyles}
                        className="select-custom pl-0"
                        classNamePrefix="select property type"
                        required
                        value={property_state}
                        onChange={(selectedOption) => setPropertyState(selectedOption)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Country
                    </label>
                    <div className="location-area">
                      <Select
                        name="colors"
                        options={PropertyCountry}
                        styles={customStyles}
                        className="select-custom pl-0"
                        classNamePrefix="select property type"
                        required
                        value={property_country}
                        onChange={(selectedOption) => setPropertyCountry(selectedOption)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter ZIP Code"
                      value={property_zip_code}
                      onChange={(e) => setPropertyZipCode(e.target.value)}
                    />
                  </div>
                </div>

              </div>

            </form>
          </div>
        </div>
        {/* Property Location Ends */}

        {/* Property Details Starts */}
        <div
          className="tab-pane fade"
          id="nav-item4"
          role="tabpanel"
          aria-labelledby="nav-item4-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Listing Details</h4>
            <form className="form-style1">
              <div className="row">
                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Size in ft (only numbers)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Size"
                      value={property_size}
                      onChange={(e) => setPropertySize(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">Rooms</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No.of Rooms"
                      value={property_rooms}
                      onChange={(e) => setPropertyRooms(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Bedrooms
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No.of Bedrooms"
                      value={property_bedrooms}
                      onChange={(e) => setPropertyBedrooms(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Bathrooms
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No.of Bathrooms"
                      value={property_baths}
                      onChange={(e) => setPropertyBaths(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Garage size
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Garage Size"
                      value={property_garage_size}
                      onChange={(e) => setPropertyGarageSize(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Year built
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Year Built"
                      value={property_year_built}
                      onChange={(e) => setPropertyYearBuilt(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Garage
                    </label>
                    <div className="location-area">
                      <Select
                        name="colors"
                        options={GarageOptions}
                        styles={customStyles}
                        className="select-custom pl-0"
                        classNamePrefix="select property type"
                        required
                        value={property_garage}
                        onChange={(selectedOption) => setPropertyGarage(selectedOption)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">
                      Basement
                    </label>
                    <div className="location-area">
                      <Select
                        name="colors"
                        options={BasementOptions}
                        styles={customStyles}
                        className="select-custom pl-0"
                        classNamePrefix="select property type"
                        required
                        value={property_basement}
                        onChange={(selectedOption) => setPropertyBasement(selectedOption)}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </form>
          </div>

          <button type="submit" className="ud-btn btn-thm" onClick={createProperty}>
            Add Property
            <i className="fal fa-arrow-right-long" />
          </button>

        </div>
        {/* Property Details End */}

      </div>
    </>
  );
};

export default AddPropertyTabContent;
