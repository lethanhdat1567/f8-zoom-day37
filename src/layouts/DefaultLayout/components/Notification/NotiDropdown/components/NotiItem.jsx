import classNames from "classnames/bind";
import styles from "./NotiItem.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function NotiItem({ data }) {
    return (
        <li className={cx("item", { unread: data.isUnRead })}>
            <img
                className={cx("thumbnail")}
                src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
            />
            <div className={cx("info")}>
                <p className={cx("item-desc")}>{data.title}</p>
                <p className={cx("item-timer")}>{data.time}</p>
            </div>
        </li>
    );
}

NotiItem.propTypes = {
    data: PropTypes.object,
};

export default NotiItem;
