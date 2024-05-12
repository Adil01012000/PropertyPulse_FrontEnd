"use client";
import { React, useState, useEffect } from "react";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import ListingSidebar from "@/components/listing/sidebar";
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";

const BuyProperty = () => {

    const [filteredData, setFilteredData] = useState([]);

    const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

    const [sortedFilteredData, setSortedFilteredData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const [colstyle, setColstyle] = useState(false);
    const [pageItems, setPageItems] = useState([]);

    const [pageContentTrac, setPageContentTrac] = useState([]);

    useEffect(() => {
        setPageItems(
            sortedFilteredData.slice((pageNumber - 1) * 8, pageNumber * 8)
        );
        setPageContentTrac([
            (pageNumber - 1) * 8 + 1,
            pageNumber * 8,
            sortedFilteredData.length,
        ]);
    }, [pageNumber, sortedFilteredData]);

    const [listingStatus, setListingStatus] = useState("All");
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [bedrooms, setBedrooms] = useState(0);
    const [bathroms, setBathroms] = useState(0);
    const [location, setLocation] = useState("All Cities");
    const [squirefeet, setSquirefeet] = useState([]);
    const [yearBuild, setyearBuild] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const resetFilter = () => {
        setListingStatus("All");
        setPropertyTypes([]);
        setPriceRange([0, 100000]);
        setBedrooms(0);
        setBathroms(0);
        setLocation("All Cities");
        setSquirefeet([]);
        setyearBuild([0, 2050]);
        setCategories([]);
        setCurrentSortingOption("Newest");
        document.querySelectorAll(".filterInput").forEach(function (element) {
            element.value = null;
        });
    };

    const handlelistingStatus = (elm) => {
        setListingStatus((pre) => (pre == elm ? "All" : elm));
    };

    const handlepropertyTypes = (elm) => {
        if (elm == "All") {
            setPropertyTypes([]);
        } else {
            setPropertyTypes((pre) =>
                pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
            );
        }
    };
    const handlepriceRange = (elm) => {
        setPriceRange(elm);
    };
    const handlebedrooms = (elm) => {
        setBedrooms(elm);
    };
    const handlebathroms = (elm) => {
        setBathroms(elm);
    };
    const handlelocation = (elm) => {
        console.log(elm);
        setLocation(elm);
    };
    const handlesquirefeet = (elm) => {
        setSquirefeet(elm);
    };
    const handleyearBuild = (elm) => {
        setyearBuild(elm);
    };
    const handlecategories = (elm) => {
        if (elm == "All") {
            setCategories([]);
        } else {
            setCategories((pre) =>
                pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
            );
        }
    };
    const filterFunctions = {
        handlelistingStatus,
        handlepropertyTypes,
        handlepriceRange,
        handlebedrooms,
        handlebathroms,
        handlelocation,
        handlesquirefeet,
        handleyearBuild,
        handlecategories,
        priceRange,
        listingStatus,
        propertyTypes,
        resetFilter,

        bedrooms,
        bathroms,
        location,
        squirefeet,
        yearBuild,
        categories,
        setPropertyTypes,
        setSearchQuery,
    };

    useEffect(() => {
        const refItems = listings.filter((elm) => {
            if (listingStatus == "All") {
                return true;
            } else if (listingStatus == "Buy") {
                return !elm.forRent;
            } else if (listingStatus == "Rent") {
                return elm.forRent;
            }
        });

        let filteredArrays = [];

        if (propertyTypes.length > 0) {
            const filtered = refItems.filter((elm) =>
                propertyTypes.includes(elm.propertyType)
            );
            filteredArrays = [...filteredArrays, filtered];
        }
        filteredArrays = [
            ...filteredArrays,
            refItems.filter((el) => el.bed >= bedrooms),
        ];
        filteredArrays = [
            ...filteredArrays,
            refItems.filter((el) => el.bath >= bathroms),
        ];
        filteredArrays = [
            ...filteredArrays,
            refItems.filter(
                (el) =>
                    el.city
                        .toLocaleLowerCase()
                        .includes(searchQuery.toLocaleLowerCase()) ||
                    el.location
                        .toLocaleLowerCase()
                        .includes(searchQuery.toLocaleLowerCase()) ||
                    el.title
                        .toLocaleLowerCase()
                        .includes(searchQuery.toLocaleLowerCase()) ||
                    el.features
                        .join(" ")
                        .toLocaleLowerCase()
                        .includes(searchQuery.toLocaleLowerCase())
            ),
        ];

        filteredArrays = [
            ...filteredArrays,
            !categories.length
                ? [...refItems]
                : refItems.filter((elm) =>
                    categories.every((elem) => elm.features.includes(elem))
                ),
        ];

        if (location != "All Cities") {
            filteredArrays = [
                ...filteredArrays,
                refItems.filter((el) => el.city == location),
            ];
        }

        if (priceRange.length > 0) {
            const filtered = refItems.filter(
                (elm) =>
                    Number(elm.price.split("$")[1].split(",").join("")) >=
                    priceRange[0] &&
                    Number(elm.price.split("$")[1].split(",").join("")) <= priceRange[1]
            );
            filteredArrays = [...filteredArrays, filtered];
        }

        if (squirefeet.length > 0 && squirefeet[1]) {
            console.log(squirefeet);
            const filtered = refItems.filter(
                (elm) =>
                    elm.sqft >= Number(squirefeet[0]) && elm.sqft <= Number(squirefeet[1])
            );
            filteredArrays = [...filteredArrays, filtered];
        }
        if (yearBuild.length > 0) {
            const filtered = refItems.filter(
                (elm) =>
                    elm.yearBuilding >= Number(yearBuild[0]) &&
                    elm.yearBuilding <= Number(yearBuild[1])
            );
            filteredArrays = [...filteredArrays, filtered];
        }

        const commonItems = refItems.filter((item) =>
            filteredArrays.every((array) => array.includes(item))
        );

        setFilteredData(commonItems);
    }, [
        listingStatus,
        propertyTypes,
        priceRange,
        bedrooms,
        bathroms,
        location,
        squirefeet,
        yearBuild,
        categories,
        searchQuery,
    ]);

    useEffect(() => {
        setPageNumber(1);
        if (currentSortingOption == "Newest") {
            const sorted = [...filteredData].sort(
                (a, b) => a.yearBuilding - b.yearBuilding
            );
            setSortedFilteredData(sorted);
        } else if (currentSortingOption.trim() == "Price Low") {
            const sorted = [...filteredData].sort(
                (a, b) =>
                    a.price.split("$")[1].split(",").join("") -
                    b.price.split("$")[1].split(",").join("")
            );
            setSortedFilteredData(sorted);
        } else if (currentSortingOption.trim() == "Price High") {
            const sorted = [...filteredData].sort(
                (a, b) =>
                    b.price.split("$")[1].split(",").join("") -
                    a.price.split("$")[1].split(",").join("")
            );
            setSortedFilteredData(sorted);
        } else {
            setSortedFilteredData(filteredData);
        }
    }, [filteredData, currentSortingOption]);


    const [properties, setProperties] = useState([]);

    const getProperties = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/property/getPropertyForSale", {
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
            <DefaultHeader />

            <MobileMenu />

            <section className="breadcumb-section bgc-f7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcumb-style1">
                                <h2 className="title">Property For Sale</h2>
                                <a
                                    className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                                    data-bs-toggle="offcanvas"
                                    href="#listingSidebarFilter"
                                    role="button"
                                    aria-controls="listingSidebarFilter"
                                >
                                    <span className="flaticon-settings" /> Filter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt0 pb90 bgc-f7">
                <div className="container">
                    <div className="row gx-xl-5">
                        <div className="col-lg-4 d-none d-lg-block">
                            <ListingSidebar filterFunctions={filterFunctions} />
                        </div>

                        <div className="col-lg-8">

                            <div className="row mt15">
                                {properties.map((listing) => (
                                    <div className={` ${colstyle ? 'col-sm-12' : 'col-sm-6 col-lg-6'}  `} key={listing._id}>
                                        <div className={colstyle ? "listing-style1 listCustom listing-type" : "listing-style1"}    >
                                            <div className="list-thumb" >
                                                <img
                                                    className="w-100 bdrs12 cover"
                                                    src={listing.property_images[0]}
                                                    alt={`Uploaded Image`}
                                                    width={212}
                                                    height={194}

                                                />
                                                <div className="list-price">
                                                    {listing.property_price} / <span>mo</span>
                                                </div>
                                            </div>
                                            <div className="list-content">
                                                <h6 className="list-title">
                                                    <Link href={`/single-v1/${listing._id}`}>{listing.property_title}</Link>
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

export default BuyProperty;
