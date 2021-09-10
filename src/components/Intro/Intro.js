import React from "react";
import { ArrowRight, ArrowDown } from "../../common/Svg/Svg";

import Button from "../../common/Button/Button";
import "../Intro/Intro.scss";


export default function Intro() {

    return (
        <section className="main__intro intro" id="intro">
            <div className="intro__description description">
                <h1 className="description__title">Enhancing Life
                    Excelling in Care</h1>
                <h2 className="description__sub-title">Choose Wisely. Choose CBD.</h2>
                <Button class="button--start">
                    <span className="button-text">Start Shopping </span>
                    <span className="button-line"></span>
                </Button>
                <a href="#" className="description__link">
                    See all products <ArrowRight className="arrow-svg" />
                </a>
            </div>
            <a href="#about" className="intro__link"><ArrowDown className="arrow-svg" /></a>
        </section>
    )
}



