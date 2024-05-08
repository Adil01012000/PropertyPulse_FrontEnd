"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

import Select from "react-select";

const ComapareTable = () => {

  const [comparePropertiesOne, setComparePropertiesOne] = useState([]);
  const [comparePropertiesTwo, setComparePropertiesTwo] = useState([]);

  // Get API calls
  const getPropertiesToCompare = async () => {
    try {
      let data = { property_one_id: '663a38c12aa15f4e43368d56', property_two_id: '663a38c12aa15f4e43368d56' }

      const response = await fetch(
        "http://localhost:5000/api/property/getPropertyToCompare",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const jsonData = await response.json();
      setComparePropertiesOne(jsonData.propertyOne);
      setComparePropertiesTwo(jsonData.propertyTwo);
      console.log(jsonData.propertyOne);
      console.log(jsonData.propertyTwo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPropertiesToCompare();
  }, []);


  return (
    <table className="table table-borderless mb-0">
      <thead className="t-head">
        <tr>
          <th scope="col" />
          <th scope="col">
          <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Select Category
            </label>
            <div className="location-area">
              <Select
                name="colors"
                // options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                // value={property_category}
                // onChange={(selectedOption) => setPropertyCategory(selectedOption)}
              />
            </div>
          </div>
        </div>
          </th>

          <th scope="col">

          </th>
        </tr>
      </thead>

      <thead className="t-head2">
        <tr>
          <th scope="col" />

          <th scope="col">
            <div className="membership_header">
              <div className="thumb">
                <Image
                  width={331}
                  height={245}
                  className="img-fluid mb-3 w100"
                  src="/images/listings/compare-1.jpg"
                  alt="compare-1"
                />
                
                <div className="h6 price mt-1">{comparePropertiesOne.property_title}</div>
                <div className="h6 price mt-1">{comparePropertiesOne.property_price}</div>
                <p className="address mb-0">{comparePropertiesOne.property_city} , {comparePropertiesOne.property_state} , {comparePropertiesOne.property_country}</p>
              </div>
            </div>
          </th>

          <th scope="col">
            <div className="membership_header">
              <div className="thumb">
                <Image
                  width={331}
                  height={245}
                  className="img-fluid mb-3 w100"
                  src="/images/listings/compare-1.jpg"
                  alt="compare-1"
                />
                <div className="h6 price mt-1">{comparePropertiesTwo.property_title}</div>
                <div className="h6 price mt-1">{comparePropertiesTwo.property_price}</div>
                <p className="address mb-0">{comparePropertiesTwo.property_city} , {comparePropertiesTwo.property_state} , {comparePropertiesTwo.property_country}</p>
              </div>
            </div>
          </th>

        </tr>
      </thead>

      <tbody className="t-body">
        <tr>
          <th className="text-end" scope="row">
            Property Type
          </th>
          <td>{comparePropertiesOne.property_purpose}</td>
          <td>{comparePropertiesTwo.property_purpose}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Address
          </th>
          <td>{comparePropertiesOne.property_address}</td>
          <td>{comparePropertiesTwo.property_address}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            City
          </th>
          <td>{comparePropertiesOne.property_city}</td>
          <td>{comparePropertiesTwo.property_city}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            State
          </th>
          <td>{comparePropertiesOne.property_state}</td>
          <td>{comparePropertiesTwo.property_state}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Zip Code
          </th>
          <td>{comparePropertiesOne.property_zip_code}</td>
          <td>{comparePropertiesTwo.property_zip_code}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Country
          </th>
          <td>{comparePropertiesOne.property_country}</td>
          <td>{comparePropertiesTwo.property_country}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Property Size
          </th>
          <td>{comparePropertiesOne.property_size}</td>
          <td>{comparePropertiesTwo.property_size}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Structure Type
          </th>
          <td>{comparePropertiesOne.property_structure_type}</td>
          <td>{comparePropertiesTwo.property_structure_type}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Bedrooms
          </th>
          <td>{comparePropertiesOne.property_bedrooms}</td>
          <td>{comparePropertiesTwo.property_bedrooms}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Bathrooms{" "}
          </th>
          <td>{comparePropertiesOne.property_baths}</td>
          <td>{comparePropertiesTwo.property_baths}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Garage
          </th>
          <td>{comparePropertiesOne.property_garage}</td>
          <td>{comparePropertiesTwo.property_garage}</td>
        </tr>

        <tr>
          <th className="text-end" scope="row">
            Basement
          </th>
          <td>{comparePropertiesOne.property_basement}</td>
          <td>{comparePropertiesTwo.property_basement}</td>
        </tr>

      </tbody>
    </table>
  );
};

export default ComapareTable;
