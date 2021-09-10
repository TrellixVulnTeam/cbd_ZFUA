import React, { useState } from "react";

import "../Faqs/Faqs.scss";
import { faqs } from "../../mockData/faqs";
import Button from "../../common/Button/Button";

const FaqItem = ({ title, text }) => {
    const [isOpen, setState] = useState(false);

    function openItem() {
        setState(isOpen ? false : true);
    }

    return (
        <div className="faqs__item">
            <Button class="faqs__button" onclick={openItem}>
                <span className="button-symbol">{isOpen ? "-" : "+"}</span>
                <span className="button-text">{title}</span>
            </Button>
            <p className={"faqs-details" + (isOpen ? " faqs-details--open" : "")}>{text}</p>
        </div>
    );
}


export default function Faqs() {
    return (
        <section className="main__faqs faqs" id="faqs">
            <div className="faqs__container">
                <h2 className="faqs__title">Frequently asked questions</h2>
                <div className="faqs__list">
                    {
                        faqs.map((faq, index) => (
                            <FaqItem title={faq.title} text={faq.text} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}