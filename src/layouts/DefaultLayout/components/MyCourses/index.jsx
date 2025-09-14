import classNames from "classnames/bind";
import styles from "./MyCourses.module.scss";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import CourseItem from "./components/CourseItem/CourseItem";

const cx = classNames.bind(styles);

const courseData = [
    {
        title: "Fullstack web",
        info: "Học cách đây 7 giờ trước",
        thumbnail:
            "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
    },
    {
        title: "Javascript cơ bản",
        info: "Học cách đây 2 phút trước",
        thumbnail: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    },
    {
        title: "Javascript Pro",
        info: "Học cách đây 3 giờ trước",
        thumbnail:
            "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
    },
];

function MyCourses() {
    const [open, setOpen] = useState(false);

    return (
        <div className={cx("wrapper")}>
            <p className={cx("text")} onClick={() => setOpen(true)}>
                Khóa học của tôi
            </p>
            <Dropdown
                open={open}
                onClose={() => setOpen(false)}
                width="380px"
                position="bottom-right"
            >
                <div className={cx("dropdown")}>
                    <div className={cx("header")}>
                        <h2 className={cx("title")}>Khóa học của tôi</h2>
                        <span className={cx("link-more")}>Xem tất cả</span>
                    </div>
                    <ul className={cx("list")}>
                        {courseData.map((item, index) => (
                            <CourseItem item={item} key={index} />
                        ))}
                    </ul>
                </div>
            </Dropdown>
        </div>
    );
}

export default MyCourses;
