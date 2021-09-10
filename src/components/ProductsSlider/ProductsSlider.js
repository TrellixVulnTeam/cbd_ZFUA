import React from "react";
import Slider from "react-slick";
import { ArrowRight } from "../../common/Svg/Svg";
import "../ProductsSlider/ProductsSlider.scss";

export default function ProductsSlider(props) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: props.class,
        nextArrow: <button className="slick-arrow slick-arrow--right"><ArrowRight className="arrow-svg" /></button>,
        prevArrow: <button className="slick-arrow slick-arrow--left"><ArrowRight className="arrow-svg" /></button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    );
}