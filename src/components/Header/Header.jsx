import React from "react";
import "./Header.css";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import destinationimg1 from "./../../assets/serengeti.jpg"
import destinationimg2 from "./../../assets/seychelles.jpg"
import destinationimg3 from "./../../assets/namibia.jpg"
import destinationimg4 from "./../../assets/marine-life.jpg"
import destinationimg5 from "./../../assets/morocco.jpg"
import destinationimg6 from "./../../assets/st.petersburg.jpg"
import destinationimg7 from "./../../assets/Egypt.jpg"
import destinationimg8 from "./../../assets/maasai mara.jpg"
import destinationimg9 from "./../../assets/niagara-falls.jpg"
import destinationimg10 from "./../../assets/kruger.png"


export default function Header() {
    return (
        <div className="header section" id="home">
            <div className="hero-img">
                <h1>Best Safaris and Adventures</h1>
            </div>
            <Swiper 

                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={
                    {
                        delay: 1500,
                    }
                }
                modules={[Autoplay]}

            className="swiper" >
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg1} alt="serengeti national park" />
                        <h3>Serengeti</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg2} alt="" />
                        <h3>Seychelles</h3>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg3} alt="" />
                        <h3>Namibia</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg4} alt="" />
                        <h3>Marine life</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg5} alt="morocco" />
                        <h3>Morocco</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg6} alt="" />
                        <h3>St. Petersburg</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg7} alt="" />
                        <h3>Egypt</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg8} alt="" />
                        <h3>Maasai Mara</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg9} alt="" />
                        <h3>Niagara falls</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="destin-cards">
                        <img src={destinationimg10} alt="" />
                        <h3>Kruger, SA</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
            
        </div>
    )
}
