import classNames from "classnames/bind";
import styles from "./Coursecard.module.scss";
import { Clock } from "lucide-react";
import PropTypes from "prop-types";
import { formatNumber } from "@/utils/string";

const cx = classNames.bind(styles);

function CourseCard({ item }) {
    return (
        <div className="col">
            <div className={cx("item")}>
                <div className={cx("thumbnail-wrap")}>
                    <img className={cx("thumbnail")} src={item.image_url} />
                </div>
                <div className={cx("info")}>
                    <h3 className={cx("title")}>{item.title}</h3>
                    {item.price > 0 ? (
                        <div className={cx("price")}>
                            <span className={cx("old-price")}>
                                {formatNumber(item.old_price)}
                            </span>
                            <span className={cx("current-price")}>
                                {formatNumber(item.price)}
                            </span>
                        </div>
                    ) : (
                        <span className={cx("current-price")}>Miễn phí</span>
                    )}
                    <div className={cx("more-info")}>
                        <div className={cx("info-item")}>
                            <img
                                className={cx("info-item-avatar")}
                                src={
                                    "https://fullstack.edu.vn/images/founder.jpeg"
                                }
                            />
                            <span className={cx("info-item-name")}>
                                Sơn Đặng
                            </span>
                        </div>
                        <div className={cx("timer")}>
                            <Clock size={16} />
                            <span className={cx("timer-text")}>
                                {item.duration_text}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CourseCard.propTypes = {
    item: PropTypes.object,
};

export default CourseCard;
