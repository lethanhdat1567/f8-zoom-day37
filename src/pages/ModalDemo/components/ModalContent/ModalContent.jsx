import classNames from "classnames/bind";
import styles from "./ModalContent.module.scss";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const cx = classNames.bind(styles);

function ModalContent({ title = "Thông báo", desc, onClose }) {
    return (
        <div className={cx("content")}>
            <h3 className={cx("title")}>{title}</h3>
            <p className={cx("desc")}>{desc}</p>
            <button className={cx("close-btn")} onClick={onClose}>
                <X size={14} />
            </button>
        </div>
    );
}

ModalContent.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    onClose: PropTypes.func,
};

export default ModalContent;
