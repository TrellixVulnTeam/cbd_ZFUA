import React from "react";

import "../Footer/Footer.scss";
import Form from "../Form/Form";

export default function Footer() {

    return (
        <footer className="footer" id="footer">
            <div className="footer__container">
                <div className="footer__col">
                    <a href="#" className="footer__link">Privacy Policy </a>
                    <a href="#" className="footer__link">Terms of Use </a>
                    <a href="#" className="footer__link">Return Policy</a>
                </div>
                <div className="footer__col">
                    <div className="footer__logo">CBD</div>
                    <div className="footer__social-networks social-networks">
                        <a href="#" className="social-networks__item">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-networks__item">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-networks__item">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="footer__col">
                    <a href="#" className="footer__link">SHIPPING INFO</a>
                    <a href="#" className="footer__link">RETURNS / EXCHANGES</a>
                    <a href="#" className="footer__link">CONTACT</a>
                </div>
            </div>
            <Form />
            <div className="footer__bottom">
                <span className="footer-text">Copyright</span>
            </div>
        </footer>
    )
}