import React, { useState } from "react";

import "../MainPage/MainPage.scss";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Products from "../Products/Products";
import Faqs from "../Faqs/Faqs";
import FeedBacks from "../FeedBacks/FeedBacks";
import Footer from "../Footer/Footer";

export default function MainPage() {
    const [cartCount, setCount] = useState();
    function getCount(count) {
        setCount(count);
    }

    return (
        <>
            <Header get={cartCount} />
            <main className="main">
                <Intro />
                <About />
                <Products get={getCount} />
                <Faqs />
                <FeedBacks />
            </main>
            <Footer />
        </>
    );
}