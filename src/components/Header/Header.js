import React from "react";

import "../Header/Header.scss";
import Navigation from "../Navigation/Navigation";

export default function Header(props) {
    return (
        <header className="header">
            <Navigation count={props.get} />
        </header>
    );
}