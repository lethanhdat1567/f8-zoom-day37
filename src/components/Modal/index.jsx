// @ts-nocheck
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const cx = classNames.bind(styles);

const Modal = forwardRef(
    (
        {
            children,
            isOpen: _isOpen = false,
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
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(_isOpen);

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

        useEffect(() => {
            setIsOpen(_isOpen);
        }, [_isOpen]);

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

        // useImperativeHandle
        useImperativeHandle(
            ref,
            () => ({
                open() {
                    setIsOpen(true);
                },
                close() {
                    setIsOpen(false);
                },
                toggle() {
                    setIsOpen(!isOpen);
                },
            }),
            [isOpen]
        );

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
                    onClick={() =>
                        shouldCloseOnOverlayClick && onRequestClose()
                    }
                ></div>
            </div>
        );
    }
);

Modal.displayName = "Modal";

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
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
