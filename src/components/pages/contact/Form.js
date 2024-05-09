"use client";
import React, { useState, useEffect } from "react";

const Form = () => {

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const addQuery = async () => {
    let data = { first_name, last_name, email, query };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch("http://localhost:5000/api/contact/createContactUs", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('API Success');
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Write First Name"
              required
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div> 

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Write Last Name"
              required
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Write Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              Your Query
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder="Write Your Query"
              defaultValue={""}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm" onClick={addQuery}>
              Submit
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
