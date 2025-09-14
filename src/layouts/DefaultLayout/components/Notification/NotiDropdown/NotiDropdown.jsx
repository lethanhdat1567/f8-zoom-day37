import classNames from "classnames/bind";
import styles from "./NotiDropdown.module.scss";
import Dropdown from "@/components/Dropdown";
import NotiItem from "./components/NotiItem";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const notificationsData = [
    {
        id: 1,
        title: "Bài học Tìm hiểu về Closure mới được thêm vào.",
        time: "2 ngày trước",
        isUnRead: false,
    },
    {
        id: 2,
        title: "Bài học Tìm hiểu về Garbage Collection mới được thêm vào.",
        time: "2 ngày trước",
        isUnRead: true,
    },
    {
        id: 3,
        title: "Bài học Tìm hiểu Set và WeakSet mới được thêm vào.",
        time: "2 ngày trước",
        isUnRead: true,
    },
    {
        id: 4,
        title: "Bài học Tìm hiểu Map và WeakMap mới được thêm vào.",
        time: "2 ngày trước",
        isUnRead: true,
    },
    {
        id: 5,
        title: "Bài học Tóm tắt chương mới được thêm vào.",
        time: "4 ngày trước",
        isUnRead: true,
    },
    {
        id: 6,
        title: "Bài học Tích hợp với Frontend mới được thêm vào.",
        time: "4 ngày trước",
        isUnRead: false,
    },
    {
        id: 7,
        title: "Bài học Giới thiệu về Event Loop mới được thêm vào.",
        time: "5 ngày trước",
        isUnRead: true,
    },
    {
        id: 8,
        title: "Bài học Bất đồng bộ trong JavaScript mới được thêm vào.",
        time: "6 ngày trước",
        isUnRead: false,
    },
    {
        id: 9,
        title: "Bài học Promise và Async/Await mới được thêm vào.",
        time: "6 ngày trước",
        isUnRead: true,
    },
    {
        id: 10,
        title: "Bài học Module trong JavaScript mới được thêm vào.",
        time: "1 tuần trước",
        isUnRead: true,
    },
];

function NotiDropdown({ open, onClose }) {
    return (
        <Dropdown
            open={open}
            onClose={onClose}
            position="bottom-right"
            width="400px"
        >
            <div className={cx("dropdown")}>
                <div className={cx("header")}>
                    <h2 className={cx("title")}>Thông báo</h2>
                    <span className={cx("link-more")}>Đánh dấu đã đọc</span>
                </div>
                <ul className={cx("list")}>
                    {notificationsData.map((item) => (
                        <NotiItem key={item.id} data={item} />
                    ))}
                </ul>
                <div className={cx("footer")}>
                    <p className={cx("footer-text")}>Xem tất cả thông báo</p>
                </div>
            </div>
        </Dropdown>
    );
}

NotiDropdown.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
};

export default NotiDropdown;
