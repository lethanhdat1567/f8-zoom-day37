import classNames from "classnames/bind";
import styles from "./Tool.module.scss";
import { Eraser, Upload } from "lucide-react";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Tool({ onUpload, onDestroy }) {
    return (
        <div className={cx("wrap")}>
            <input
                id="upload-input"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => onUpload(e.target.files[0])}
            />

            <label className={cx("btn")} htmlFor="upload-input">
                <Upload />
                <p className={cx("btn-text")}>Upload ảnh mới</p>
            </label>
            <button className={cx("btn", "destroy")} onClick={onDestroy}>
                <Eraser />
                <p className={cx("btn-text")}>Xóa ảnh</p>
            </button>
        </div>
    );
}

Tool.propTypes = {
    onUpload: PropTypes.func,
    onDestroy: PropTypes.func,
};

export default Tool;
