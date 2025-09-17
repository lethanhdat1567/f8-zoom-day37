import classNames from "classnames/bind";
import styles from "./ActionButtons.module.scss";
import Button from "@/components/Button/Button";
import PropTypes from "prop-types";
import { memo } from "react";

const cx = classNames.bind(styles);

// @ts-ignore
const ActionButtons = memo(({ onIncrement, onReset }) => {
    console.log("ActionButtons: ", "component re-render");

    return (
        <div className={cx("wrap")}>
            <Button
                className={cx("action-btn")}
                size="large"
                onClick={onIncrement}
            >
                Increment
            </Button>
            <Button className={cx("action-btn")} size="large" onClick={onReset}>
                Reset
            </Button>
        </div>
    );
});

ActionButtons.displayName = "ActionButtons";

// @ts-ignore
ActionButtons.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default ActionButtons;
