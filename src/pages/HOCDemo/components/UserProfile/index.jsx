import classNames from "classnames/bind";
import styles from "./UserProfile.module.scss";
import withLoading from "@/hoc/withLoading";

const cx = classNames.bind(styles);

const UserProfile = withLoading(() => {
    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("title")}>User Profile</h3>
            <p className={cx("name")}>Name: John Doe</p>
            <p className={cx("email")}>Email: john@example.com</p>
        </div>
    );
});

export default UserProfile;
