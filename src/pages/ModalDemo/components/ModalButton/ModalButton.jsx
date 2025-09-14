import classNames from "classnames/bind";
import styles from "./ModalButton.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function ModalButton({ children, onClick }) {
    return (
        <button onClick={onClick} className={cx("btn")}>
            {children}
        </button>
    );
}

ModalButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default ModalButton;
