import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import CarouselCard from "./carouselCard";

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <CarouselCard image="moviereckons-20210429-0001.jpg">
            <h3>Movies every entrepreneur should watch - </h3>
            <ol>
              <li>The Social Network (2010)</li>
              <li>The Pursuit Of Happyness (2006)</li>
              <li>Startup.com (2001)</li>
              <li>Pirates Of Silicon Valley (1999)</li>
              <li>The Wolf of Wall Street (2013)</li>
            </ol>
          </CarouselCard>
        </div>
        <div>
          <CarouselCard image="moviereckons-20210429-0002.jpg">
            <h3>Best web series to watch on youtube - </h3>
            <ol>
              <li>The Social Network (2010)</li>
              <li>The Pursuit Of Happyness (2006)</li>
              <li>Startup.com (2001)</li>
              <li>Pirates Of Silicon Valley (1999)</li>
              <li>The Wolf of Wall Street (2013)</li>
            </ol>
          </CarouselCard>
        </div>
        <div>
          <CarouselCard image="moviereckons-20210429-0003.jpg">
            <h3>Popular K-dramas to watch in 2021 - </h3>
            <ol>
              <li>The Social Network (2010)</li>
              <li>The Pursuit Of Happyness (2006)</li>
              <li>Startup.com (2001)</li>
              <li>Pirates Of Silicon Valley (1999)</li>
              <li>The Wolf of Wall Street (2013)</li>
            </ol>
          </CarouselCard>
        </div>
        <div>
          <CarouselCard image="moviereckons-20210429-0004.jpg">
            <h3>Sci-fi movies to watch out - </h3>
            <ol>
              <li>The Social Network (2010)</li>
              <li>The Pursuit Of Happyness (2006)</li>
              <li>Startup.com (2001)</li>
              <li>Pirates Of Silicon Valley (1999)</li>
              <li>The Wolf of Wall Street (2013)</li>
            </ol>
          </CarouselCard>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
