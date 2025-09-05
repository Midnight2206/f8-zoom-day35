import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./counter.module.scss";
const cx = classNames.bind(styles);
function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className={cx("wrapper")}>
            <div className={cx("counter")}>
                <h2 className={cx(count ? (count > 0 ? "positive" : "negative") : "zero")}>
                    {count}
                </h2>
            </div>
            <div className={cx("controls")}>
                <button className={cx("btn")} id="increase" onClick={() => setCount(count + 1)}>Increase</button>
                <button className={cx("btn")} id="reset" onClick={() => setCount(0)}>Resset</button>
                <button className={cx("btn")} id="decrease" onClick={() => setCount(count -1)}>Decrease</button>
            </div>
            <div className={cx("info")}>{count ? (count > 0 ? "Dương" : "Âm") : "Bằng không"}</div>
        </div>
    )
}
export default Counter;