import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import UserMenu from "../UserMenu";

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx("wrapper")}>
            <AppLogo />
            <SearchForm />
            <div className={cx("right")}>
                <MyCourses />
                <Notification />
                <UserMenu />
            </div>
        </div>
    );
}

export default Header;
