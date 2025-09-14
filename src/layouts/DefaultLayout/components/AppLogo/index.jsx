import classNames from "classnames/bind";
import styles from "./AppLogo.module.scss";
import { Link } from "react-router";

const cx = classNames.bind(styles);

function AppLogo() {
    return (
        <Link to="/" className={cx("wrapper")}>
            <img
                src="./src/assets/images/f8-logo.png"
                className={cx("logo-image")}
            />
            <span className={cx("logo-text")}>Học Lập Trình Để Đi Làm</span>
        </Link>
    );
}

export default AppLogo;
