// @ts-nocheck
import classNames from "classnames/bind";
import styles from "./CustomInput.module.scss";
import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const cx = classNames.bind(styles);

const CustomInput = forwardRef(
    ({ label = "", placehoder = "", onFocus, onBlur }, ref) => {
        const [valueInput, setValueInput] = useState("");
        const innerRef = useRef(null);

        function handleChangeValue(e) {
            const value = e.target.value;
            setValueInput(value);
        }

        useImperativeHandle(
            ref,
            () => {
                return {
                    focus() {
                        innerRef.current.focus();
                    },
                    blur() {
                        innerRef.current.blur();
                    },
                    getValue() {
                        return innerRef.current.value;
                    },
                    setValue(value) {
                        innerRef.current.value = value;
                    },
                };
            },
            [innerRef]
        );

        return (
            <div className={cx("wrap")}>
                {label && <label className={cx("label")}>{label}</label>}
                <input
                    className={cx("input")}
                    placeholder={placehoder}
                    value={valueInput}
                    onChange={handleChangeValue}
                    ref={innerRef}
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
