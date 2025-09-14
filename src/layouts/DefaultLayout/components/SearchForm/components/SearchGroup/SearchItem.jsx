import classNames from "classnames/bind";
import styles from "./SearchGroup.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function SearchItem({ item }) {
    return (
        <li className={cx("item")}>
            <img src={item.image} className={cx("item-image")} />
            <div className={cx("info")}>
                <h3 className={cx("item-title")}>{item.title}</h3>
                <p className={cx("item-desc")}>{item.description}</p>
            </div>
        </li>
    );
}

SearchItem.propTypes = {
    item: PropTypes.object,
};

export default SearchItem;
