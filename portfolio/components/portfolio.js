import portfolio from "../styles/portfolio.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import portfolios from "../public/images/portfolio.png";
import construct from "../public/images/construct.png";
import calculator from "../public/images/calculator.png";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Portfolio() {
  return (
    <>
      <div className={portfolio.portfolio_container}>
        <div className={portfolio.title}>
          <span>Портфолио</span>
        </div>
        <div className={portfolio.swiper}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide className={portfolio.swiperSlide}>
              <a href="#">
                <Image src={calculator} alt="Picture of the author" />
              </a>
            </SwiperSlide>
            <SwiperSlide className={portfolio.swiperSlide}>
              <a href="#">
                <Image src={construct} alt="Picture of the author" />
              </a>
            </SwiperSlide>
            <SwiperSlide className={portfolio.swiperSlide}>
              <a href="#">
                <Image src={portfolios} alt="Picture of the author" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
