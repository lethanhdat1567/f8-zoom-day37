import classNames from "classnames/bind";
import styles from "./CourseBlock.module.scss";
import PropTypes from "prop-types";
import CourseCard from "./components/CourseCard/CourseCard";

const cx = classNames.bind(styles);

function CourseBlock({ title, courses }) {
    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("title")}>{title}</h2>
            <div className={cx("courses-wrapper")}>
                <div className="row row-cols-4 g-4">
                    {courses.map((course) => (
                        <CourseCard key={courses.id} item={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

CourseBlock.propTypes = {
    title: PropTypes.string,
    courses: PropTypes.array,
};

export default CourseBlock;
