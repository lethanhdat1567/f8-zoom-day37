import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { ArrowUpCircle, Home, Monitor, User } from "lucide-react";
import { NavLink } from "react-router";

const cx = classNames.bind(styles);

const navData = [
    {
        path: "/",
        label: "Home",
        icon: Home,
    },
    {
        path: "/profile",
        label: "Profile",
        icon: User,
    },
    {
        path: "/modal-demo",
        label: "Modal Demo",
        icon: Monitor,
    },
    {
        path: "/scroll-demo",
        label: "Scroll Demo",
        icon: ArrowUpCircle,
    },
];

function Sidebar() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("body")}>
                <ul className={cx("list")}>
                    {navData.map((nav, index) => (
                        <li key={index}>
                            <NavLink
                                to={nav.path}
                                className={({ isActive }) =>
                                    cx("item", { active: isActive })
                                }
                            >
                                <nav.icon size={24} />
                                <span className={cx("item-title")}>
                                    {nav.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
