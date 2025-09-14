import classNames from "classnames/bind";
import styles from "./CourseItem.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function CourseItem({ item }) {
    return (
        <li className={cx("item")}>
            <img src={item.thumbnail} className={cx("thumbnail")} />
            <div className={cx("info")}>
                <h3 className={cx("title")}>{item.title}</h3>
                <p className={cx("desc")}>{item.info}</p>
                <div className={cx("progress")} />
            </div>
        </li>
    );
}

CourseItem.propTypes = {
    item: PropTypes.object,
};

export default CourseItem;
