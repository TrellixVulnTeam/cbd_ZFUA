import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../MenuList/MenuList.scss";

export default function MenuList(props) {
    const faqs = useRef(null),
        intro = useRef(null),
        products = useRef(null),
        footer = useRef(null);
    const [active, setActive] = useState();

    function changeState(elem) {
        if (!active && elem === intro.current) {
            elem.className = "navigation__link navigation__link--active";
            return;
        }

        elem === active
            ? elem.className = "navigation__link navigation__link--active"
            : elem.className = "navigation__link";
    }

    useEffect(() => {
        changeState(footer.current);
        changeState(faqs.current);
        changeState(products.current);
        changeState(intro.current);
    });

    return (
        <ul className={props.class}>
            <li className="navigation__item">
                <a
                    href="#intro"
                    ref={el => { intro.current = el; }}
                    onClick={() => { setActive(intro.current) }}
                    className="navigation__link navigation__link--active">Home</a>
            </li>
            <li className="navigation__item">
                <a
                    className="navigation__link"
                    href="#products"
                    ref={el => { products.current = el; }}
                    onClick={() => { setActive(products.current) }}>Products</a>
            </li>
            <li className="navigation__item">
                <a href="#faqs"
                    ref={el => { faqs.current = el; }}
                    onClick={() => setActive(faqs.current)}
                    className="navigation__link"
                >Faqs</a>
            </li >
            <li className="navigation__item">
                <a href="#footer"
                    ref={el => { footer.current = el; }}
                    onClick={() => { setActive(footer.current) }}
                    className="navigation__link"
                >Contact us</a>
            </li >
        </ul >
    )
}