import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  children: React.ReactNode;
};

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  swipeToSlide: false,
  nextArrow: <></>,
  prevArrow: <></>,
  swipe: false,
  fade: true,
  touchMove: false,
};

const AutoCarousel = ({ children }: CarouselProps) => {
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default AutoCarousel;
