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
import BorderAroundText from "@/utils/borderAroundText";
export default function Portfolio() {
  return (
    <>
      <BorderAroundText>Портфолио</BorderAroundText>
      <div className={portfolio.portfolio_container}>
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
              <div className={portfolio.project}>
                <a href="https://bannykhmark1.github.io/calculator/">
                  <Image src={calculator} alt="Picture of the author" />
                  <span>Calculator</span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={portfolio.swiperSlide}>
              <div className={portfolio.project}>
                <a href="https://bannykhmark1.github.io/konstruct/">
                  <Image
                    src={construct}
                    alt="Picture of the author"
                    width={480}
                    height={295}
                  />
                  <span>Konstruct</span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={portfolio.swiperSlide}>
              <div className={portfolio.project}>
                <a href="https://bannykhmark1.github.io/portfolios/">
                  <Image
                    src={portfolios}
                    alt="Picture of the author"
                    width={480}
                    height={295}
                  />
                  <span>Portfolio</span>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
