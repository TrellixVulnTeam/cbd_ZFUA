import React from "react";
import Slider from "react-slick";

import { ArrowRight } from "../../common/Svg/Svg";
import "../FeedBackSlider/FeedBackSlider.scss";

export default function FeedBackSlider(props) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: props.class,
        nextArrow: <button className="slick-arrow slick-arrow--right"><ArrowRight className="arrow-svg" /></button>,
        prevArrow: <button className="slick-arrow slick-arrow--left"><ArrowRight className="arrow-svg" /></button>
    };

    return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    );
}