import React from "react";

export default function Cart(props) {

    return (
        <div className="func-block__item ">
            <span className="cart__count">Cart({!props.count ? 0 : props.count})</span>
        </div>
    );
}
