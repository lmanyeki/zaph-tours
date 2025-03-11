import React from "react";
import "./Testimonials.css"
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import profile1 from "./../../assets/profile1.jpg"
import profile2 from "./../../assets/profile2.jpg"
import profile3 from "./../../assets/profile3.jpg"
import profile4 from "./../../assets/profile4.jpg"
import profile5 from "./../../assets/profile5.jpg"
import profile6 from "./../../assets/profile6.jpg"

export default function Testimonials () {
    return (
        <div className="test-section">
            <h2>Exceptional journeys with Zaph Tours</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                autoplay={
                    {
                        delay: 1500,
                    }
                }
                modules={[Autoplay]}
            className="swiper">
                <SwiperSlide>
                    <div className="test-container">
                        <div className="profile">
                        <img src={profile1} alt="" />
                        <div className="details">
                        <span>
                            John Doe
                        </span>
                        <div className="ratings">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, optio.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test-container">
                        <div className="profile">
                        <img src={profile2} alt="" />
                        <div className="details">
                        <span>
                            Arianna Grande
                        </span>
                        <div className="ratings">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, optio.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test-container">
                        <div className="profile">
                        <img src={profile3} alt="" />
                        <div className="details">
                        <span>
                            Ryan Reynolds
                        </span>
                        <div className="ratings">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, optio.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test-container">
                        <div className="profile">
                        <img src={profile4} alt="" />
                        <div className="details">
                        <span>
                            Gabby Simons
                        </span>
                        <div className="ratings">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, optio.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test-container">
                        <div className="profile">
                        <img src={profile5} alt="" />
                        <div className="details">
                        <span>
                            Chris Brown
                        </span>
                        <div className="ratings">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, optio.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="test-container">
                        <div className="profile">
                        <img src={profile6} alt="" />
                        <div className="details">
                        <span>
                            Ayra Star
                        </span>
                        <div className="ratings">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, optio.</p>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    )
}