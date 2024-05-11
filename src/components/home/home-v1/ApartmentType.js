"use client";
import apartmentType from "@/data/apartmentType";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ApartmentType = () => {
  return (
    <Swiper
      className="overflow-visible"
      spaceBetween={30}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".next__active",
        prevEl: ".prev__active",
      }}
      pagination={{
        el: ".pagination__active",
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
    >
      {/* {apartmentType.map((type) => ( */}
        <SwiperSlide>
          <div className="item">
            <Link href="/grid-default">
              <div className="iconbox-style1">
                {/* <span className={`icon ${type.icon}`} /> */}
                <div className="iconbox-content">
                  <h6 className="title">any title</h6>
                  <p className="text mb-0">any count</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link href="/grid-default">
              <div className="iconbox-style1">
                {/* <span className={`icon ${type.icon}`} /> */}
                <div className="iconbox-content">
                  <h6 className="title">any title</h6>
                  <p className="text mb-0">any count</p>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      {/* ))} */}
    </Swiper>
  );
};

export default ApartmentType;
