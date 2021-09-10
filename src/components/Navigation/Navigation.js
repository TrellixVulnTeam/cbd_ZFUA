import React from "react";
import Button from "../../common/Button/Button";
import { Search } from "../../common/Svg/Svg";
import Cart from "../Cart/Cart";
import MenuList from "../MenuList/MenuList";
import "../Navigation/Navigation.scss";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    menuOpen() {
        this.setState({ isOpened: !this.state.isOpened && true });
    }

    render() {
        return (
            <nav className="navigation">
                <Button class={"navigation__hamburger hamburger"} onclick={this.menuOpen.bind(this)}>
                    {!this.state.isOpened ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
                </Button>
                <MenuList class={"navigation__list" + (this.state.isOpened ? " navigation__list--open" : "")} />
                <div className="navigation__logo">CBD</div>
                <div className="navigation__func-block func-block">
                    <Button class={"func-block__item button--func"}>
                        <span className="button-text">Login</span>
                    </Button>
                    <Button
                        class={"func-block__item button--func button--search"}>
                        <Search className={"search-svg"} />
                        <span className="button-text">Search</span>
                    </Button>
                    <Cart count={this.props.count} />
                </div>
            </nav>
        );
    }
}