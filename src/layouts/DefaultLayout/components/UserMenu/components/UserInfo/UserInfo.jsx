import classNames from "classnames/bind";
import styles from "./UserInfo.module.scss";

const cx = classNames.bind(styles);

function UserInfo() {
    return (
        <div className={cx("wrap")}>
            <img
                src="https://files.fullstack.edu.vn/f8-prod/public-images/68c5715d0037b.png"
                className={cx("avatar")}
            />
            <div className={cx("info")}>
                <h2 className={cx("name")}>Le Thanh Dat</h2>
                <h2 className={cx("email")}>le@gmail.com</h2>
            </div>
        </div>
    );
}

export default UserInfo;
