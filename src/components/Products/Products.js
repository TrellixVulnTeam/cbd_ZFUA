import React from "react";
import { Star } from "../../common/Svg/Svg";
import { goods } from "../../mockData/goods";
import Button from "../../common/Button/Button";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

import "../Products/Products.scss";
localStorage.setItem("count", 0);

const Product = ({ rating, title, src, price, get }) => {

    function addToCart() {
        let count = +localStorage.getItem("count");
        localStorage.setItem("count", count + 1);
        get(localStorage.getItem("count"));
    }

    return (<div className="products-slider__item product">
        <div className="product__top">
            <div className="product__rating">
                {rating.map((isGood, index) => isGood && <Star className="star-svg" key={index} />)}
            </div>
            <div className="product__title">{title}</div>
        </div>
        <div className="product__image">
            <img src={src} alt="product" className="product-image" />
        </div>
        <div className="product__buy">
            <span className="product__price">${price} USD</span>
            <Button class="button--buy" onclick={addToCart}>
                <span className="button-text">Shop</span>
                <span className="button-line"></span>
            </Button>
        </div>
    </div>
    );
}

export default function Products(props) {
    function getRating(rating) {
        const stars = new Array(5);
        stars.fill(true, 0, rating);
        return stars;
    }

    function getCount(count) {
        props.get(count);
    }

    function getProductsList() {
        return goods.map((good, index) => (
            <Product
                rating={getRating(good.rating)}
                title={good.title}
                src={good.image}
                price={good.price}
                key={index} get={getCount} />
        ));
    }

    return (
        <section className="products" id="products">
            <h2 className="products__title">CBD Featured Products</h2>
            <ProductsSlider class="products__slider products-slider">
                {getProductsList()}
            </ProductsSlider>
        </section >
    );
}