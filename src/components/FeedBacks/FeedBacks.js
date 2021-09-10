import React from "react";

import "../FeedBacks/FeedBacks.scss";
import FeedBackSlider from "../FeedBackSlider/FeedBackSlider";
import feedbacks from "../../mockData/feedbacks";


export default function FeedBacks() {

    return (
        <section className="main__feedbacks feedbacks">
            <FeedBackSlider class="feedbacks__slider feedbacks-slider">
                {
                    feedbacks.map((feedback, index) => (
                        <div className="feedbacks-slider__slide feedback" key={index}>
                            <div className="feedback__content">
                                <div className="feedback__rating">
                                    {feedback.rating.map((item, index) => (
                                        <span key={index} > {item}</span>
                                    ))}
                                </div>
                                <div className="feedback__text">
                                    {feedback.text}
                                </div>
                                <div className="feedback__author"><span className="button-line"></span> {feedback.author}</div>
                            </div>
                        </div>
                    ))
                }
            </FeedBackSlider>
        </section >
    )
}