import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function Dropdown({
    children,
    open,
    width = "100%",
    position = "bottom",
    onClose,
}) {
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                onClose?.();
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onClose]);

    return (
        <div
            ref={dropdownRef}
            className={cx("wrapper", { active: open, [position]: position })}
            style={{ width: width }}
        >
            {children}
        </div>
    );
}

Dropdown.propTypes = {
    children: PropTypes.element,
    open: PropTypes.bool,
    width: PropTypes.string,
    position: PropTypes.oneOf([
        "left",
        "right",
        "top",
        "bottom",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
    ]),
    onClose: PropTypes.func,
};

export default Dropdown;
