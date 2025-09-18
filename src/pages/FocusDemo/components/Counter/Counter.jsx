import classNames from "classnames/bind";
import styles from "./Counter.module.scss";
import Button from "@/components/Button/Button";
import { useRef } from "react";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Counter({ onTrigger }) {
    const counterRef = useRef(0);

    counterRef.current += 1;

    return (
        <div className={cx("wrap")}>
            <div className={cx("number-wrap")}>
                <h2 className={cx("number")}>
                    Số lần component render: {counterRef.current}
                </h2>
            </div>
            <Button className={cx("trigger-btn")} onClick={onTrigger}>
                Re-render component
            </Button>
        </div>
    );
}

Counter.propTypes = {
    onTrigger: PropTypes.func,
};

export default Counter;
