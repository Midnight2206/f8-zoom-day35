import classNames from "classnames/bind";
import styles from './ButtonsPage.module.scss';
import { useState } from "react";
import Button from "../../components/Button";
import { faCoffee, faAnchorLock } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ButtonsPages() {
    const [loading, setLoading] = useState(false);
    return (
        <div className={cx("wrapper")}>
            <Button to="/buttons" navLink={true} onChangeActive={(isActive) => console.log(isActive)}>NavLink</Button>
            <Button disabled>Disabled</Button>
            <Button bordered>Bordered</Button>
            <Button rounded>Rounded</Button>
            <Button>Normal</Button>
            <Button primary size="small">Small</Button>
            <Button primary>Medium</Button>
            <Button primary size="large">Large</Button>
            <Button leftIcon={faCoffee} primary size="large">Left Icon</Button>
            <Button rightIcon={faAnchorLock} primary size="large">Right Icon</Button>
            <Button primary loading={loading} onClick={() => setLoading(prev => !prev)}>Loading</Button>
            <Button bordered loading={loading} onClick={() => setLoading(prev => !prev)}>Loading</Button>
            <Button primary bordered loading={loading} onClick={() => setLoading(prev => !prev)}>Loading</Button>
            <Button rounded loading={loading} onClick={() => setLoading(prev => !prev)}>Loading</Button>
            <Button bordered primary>Bordered Primary</Button>
            <Button bordered rounded primary>Bordered Rounded Primary</Button>
            <Button rounded primary>Rounded Primary</Button>
            <Button bordered rounded>Bordered Rounded</Button>
            <Button bordered rounded disabled>Bordered Rounded Disabled</Button>
            <Button rounded disabled>Rounded Disabled</Button>
            <Button bordered disabled>Bordered Disabled</Button>
            <Button primary disabled>Primary Disabled</Button>
        </div>
    );
}

export default ButtonsPages;