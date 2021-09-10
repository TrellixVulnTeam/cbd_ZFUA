import React, { useState } from "react";
import logos from "../../img/about-logos.png";
import tabsContent from "../../mockData/tabs";

import "../About/About.scss";

const Tab = (props) => {
    return (
        <a className={"tabs__item" + (props.id === props.activeTab ? " tabs__item--active" : "")}
            data-id={props.id}
            onClick={() => props.openTab(props.id)}>
            {props.content}
        </a>
    );
}

export default function About() {
    const [tabId, setTab] = useState(0);
    const tabs = ["WHAT IS CBD?", "BENEFITS", "OUR DIFFERENCE"];

    function openTab(tab) {
        setTab(tab);
    }

    return (
        <section className="main__about about" id="about" >
            <div className="about__container">
                <div className="about__logos">
                    <img src={logos} alt="logos" className="about-logos" />
                </div>
                <div className="about__info">
                    <div className="about__tabs tabs">
                        {
                            tabs.map((tab, index) => (
                                <Tab key={index} content={tab} id={index} openTab={openTab} activeTab={tabId} />
                            ))
                        }
                    </div>
                    <div className="about__content">
                        <article className={"about-content about-content--show"}>
                            <div className="about-content__info info">
                                <h2 className="info__title">{tabsContent[tabId].headline}</h2>
                                <div className="info__text">
                                    {
                                        tabsContent[tabId].text.map((textItem, index) => (
                                            <p className="info-text" key={index}>{textItem}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="about-content__images-list images-list">
                                {
                                    tabsContent[tabId].images.map((image, index) =>
                                    (
                                        <div
                                            className="images-list__item"
                                            style={{ backgroundImage: `url(${image})` }}
                                            key={index}>
                                        </div>
                                    ))
                                }
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section >
    );
}