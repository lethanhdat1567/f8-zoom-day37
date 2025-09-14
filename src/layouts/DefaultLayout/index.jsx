import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className={cx("body")}>
                <Sidebar />
                <div className={cx("content")}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
