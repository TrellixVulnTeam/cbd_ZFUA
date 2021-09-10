import React from "react";

import "../Button/Button.scss";

export default function Button(props) {

    function handler() {
        if (props.onclick) props.onclick();
    }

    return (
        <button
            className={"button " + props.class}
            onClick={handler}

        >{props.children}</button>
    );
}