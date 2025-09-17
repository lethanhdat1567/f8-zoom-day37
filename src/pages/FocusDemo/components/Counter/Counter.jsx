import classNames from "classnames/bind";
import styles from "./Counter.module.scss";
import Button from "@/components/Button/Button";
import { useRef } from "react";

const cx = classNames.bind(styles);

function Counter() {
    const counterRef = useRef(0);

    return (
        <div className={cx("wrap")}>
            <div className={cx("number-wrap")}>
                <h2 className={cx("number")}>
                    Số lần component render: {counterRef.current}
                </h2>
            </div>
        </div>
    );
}

export default Counter;
