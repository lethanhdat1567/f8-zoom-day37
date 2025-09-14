import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function Modal({
    children,
    isOpen,
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    closeTimeoutMS = 0,
    overlayClassName,
    className,
    bodyOpenClassName = "modal-open",
    htmlOpenClassName = "modal-open",
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
}) {
    function handleAfterOpen(e) {
        if (e.target !== e.currentTarget) return;

        if (isOpen) {
            onAfterOpen && onAfterOpen();
        }
    }

    function handleAfterClose(e) {
        if (e.target !== e.currentTarget) return;

        if (!isOpen && e.propertyName === "opacity") {
            onAfterClose && onAfterClose();
        }
    }

    // Handle ESC
    useEffect(() => {
        function handleESC(e) {
            if (e.key === "Escape") {
                shouldCloseOnEsc && onRequestClose();
            }
        }
        if (isOpen) {
            document.addEventListener("keydown", handleESC);
        } else {
            document.removeEventListener("keydown", handleESC);
        }

        return () => {
            document.removeEventListener("keydown", handleESC);
        };
    }, [onRequestClose, isOpen, shouldCloseOnEsc]);

    // add body and html classname
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(bodyOpenClassName);
            document.body.classList.add(htmlOpenClassName);
        } else {
            document.body.classList.remove(bodyOpenClassName);
            document.body.classList.remove(htmlOpenClassName);
        }

        return () => {
            document.body.classList.remove(bodyOpenClassName);
            document.body.classList.remove(htmlOpenClassName);
        };
    }, [isOpen, bodyOpenClassName, htmlOpenClassName]);

    return (
        <div
            className={cx("modal", { show: isOpen })}
            onTransitionEnd={handleAfterClose}
            style={{
                transition: `ease ${closeTimeoutMS}ms`,
            }}
        >
            <div
                className={cx("content", className)}
                onTransitionEnd={handleAfterOpen}
            >
                {children}
            </div>
            <div
                className={cx("overlay", overlayClassName)}
                onClick={() => shouldCloseOnOverlayClick && onRequestClose()}
            ></div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
};

export default Modal;
