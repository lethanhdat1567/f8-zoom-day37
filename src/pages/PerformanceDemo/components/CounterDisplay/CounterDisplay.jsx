import classNames from "classnames/bind";
import styles from "./CounterDisplay.module.scss";
import PropTypes from "prop-types";
import { memo } from "react";

const cx = classNames.bind(styles);

// @ts-ignore
const CounterDisplay = memo(({ count }) => {
    console.log("CounterDisplay: ", "component re-render");

    return (
        <div className={cx("count-wrap")}>
            <span className={cx("count")}>{count}</span>
        </div>
    );
});

CounterDisplay.displayName = "CounterDisplay";

// @ts-ignore
CounterDisplay.propTypes = {
    count: PropTypes.number.isRequired,
};

export default CounterDisplay;
