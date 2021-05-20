import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import CarouselCard from "./carouselCard";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <CarouselCard image="moviereckons-20210429-0001.jpg">
            <div style={{ color: "white" }}>
              <h2>Movies every entreprenuer should watch - </h2>
              <ol>
                <li>The Social Network (2010)</li>
                <li>The Pursuit Of Happyness (2006)</li>
                <li>Startup.com (2001)</li>
                <li>Pirates Of Silicon Valley (1999)</li>
                <li>The Wolf of Wall Street (2013)</li>
              </ol>
            </div>
          </CarouselCard>
        </div>
        <div>
          <CarouselCard image="moviereckons-20210429-0002.jpg">
            <div style={{ color: "white" }}>
              <h2>Best web series to watch on youtube - </h2>
              <ol>
                <li>TVF Bachelors (TVF)</li>
                <li>Operation MBBS (Dice Media)</li>
                <li>Little things (Dice Media)</li>
                <li>What's your status (Dice Media)</li>
                <li>Kota Factory (TVF)</li>
              </ol>
            </div>
          </CarouselCard>
        </div>
        <div>
          <CarouselCard image="moviereckons-20210429-0003.jpg">
            <div style={{ color: "white" }}>
              <h2>Popular K-dramas to watch - </h2>
              <ol>
                <li>Train to Busan (IMDB: 7.6/10)</li>
                <li>Oldboy (IMDB: 8.4/10)</li>
                <li>The Handmaiden (IMDB: 8.1/10)</li>
                <li>Memories of Murder (IMDB: 8.1/10)</li>
                <li>Parasite (IMDB: 8.6/10)</li>
              </ol>
            </div>
          </CarouselCard>
        </div>
        <div>
          <CarouselCard image="moviereckons-20210429-0004.jpg">
            <div style={{ color: "white" }}>
              <h2>Sci-fi movies to watch out - </h2>
              <ol>
                <li>The Martian</li>
                <li>Passengers</li>
                <li>Gravity</li>
                <li>Frankenstein</li>
                <li>Lucy</li>
              </ol>
            </div>
          </CarouselCard>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
