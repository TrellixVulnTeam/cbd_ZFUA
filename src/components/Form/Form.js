import React, { useState } from "react";
import { ArrowRight } from "../../common/Svg/Svg";
import Button from "../../common/Button/Button";

import "../Form/Form.scss";

export default function Form() {
    const [email, setState] = useState();

    function onChangeInput(e) {
        setState(e.target.value);
    }

    function subscribe() {
        const url = "https://httpbin.org/post";

        fetch(url, {
            method: 'post',
            body: JSON.stringify({ email: email })
        })
            .then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }
                    else throw new Error("HTTP status " + response.status + " " + response.statusText);
                },
                reject => {
                    throw new Error(reject);
                })
            .then(result => {
                alert(`It's your email: ${result.json.email}`);
            }).catch(e => {
                if (e.message === 'TypeError: Failed to fetch') {
                    alert("Something's gone wrong");
                }
            });
    }

    return (
        <div className="footer__form">
            <div className="footer__form-title">SUBSCRIBE TO NEWSLETTER</div>
            <div className="footer__form-container">
                <input type="email" placeholder="Email" className="input" onChange={e => onChangeInput(e)} />
                <Button class="button--send" onclick={subscribe}>
                    <ArrowRight className="arrow-svg" />
                </Button>
            </div>
        </div>
    )
}