import classNames from "classnames/bind";
import styles from "./SearchGroup.module.scss";
import PropTypes from "prop-types";
import SearchItem from "./SearchItem";

const cx = classNames.bind(styles);

function SearchGroup({ data }) {
    return (
        <ul className={cx("wrap")}>
            <div className={cx("header")}>
                <h2 className={cx("title")}>{data.title}</h2>
                <span className={cx("more-link")}>Xem thêm</span>
            </div>
            {data.items.map((item, index) => (
                <SearchItem item={item} key={index} />
            ))}
        </ul>
    );
}

SearchGroup.propTypes = {
    data: PropTypes.object,
};

export default SearchGroup;
