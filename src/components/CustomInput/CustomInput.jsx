// @ts-nocheck
import classNames from "classnames/bind";
import styles from "./CustomInput.module.scss";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";

const cx = classNames.bind(styles);

const CustomInput = forwardRef(
    ({ label = "", placehoder = "", onFocus, onBlur }, ref) => {
        const [valueInput, setValueInput] = useState("");

        function handleChangeValue(e) {
            const value = e.target.value;
            setValueInput(value);
        }

        return (
            <div className={cx("wrap")}>
                {label && <label className={cx("label")}>{label}</label>}
                <input
                    className={cx("input")}
                    placeholder={placehoder}
                    value={valueInput}
                    onChange={handleChangeValue}
                    ref={ref}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        );
    }
);

CustomInput.displayName = "CustomInput";

CustomInput.propTypes = {
    label: PropTypes.string,
    placehoder: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

export default CustomInput;
