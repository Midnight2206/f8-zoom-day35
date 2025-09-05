import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navigation.module.scss";
import Button from "../Button";
const cx = classNames.bind(styles);
function Navigation() {
    return (
        <nav className={cx("nav")}>
            <Button primary bordered to="/" navLink={true}>Home</Button>
            <Button primary bordered to="/comment" navLink={true}>Comment</Button>
            <Button primary bordered to="/todo" navLink={true}>Todo</Button>
            <Button primary bordered to="/counter" navLink={true}>Counter</Button>
            <Button primary bordered to="/product" navLink={true}>Product</Button>
            <Button primary bordered to="/profile" navLink={true}>Profile</Button>
            <Button primary bordered to="/weather" navLink={true}>Weather</Button>
            <Button primary bordered to="/buttons" navLink={true}>Buttons</Button>

        </nav>
    );
}

export default Navigation;