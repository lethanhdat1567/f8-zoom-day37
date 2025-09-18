import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import {
    ArrowUpCircle,
    ChevronsUp,
    Columns3Cog,
    Gavel,
    Home,
    Monitor,
    ScanSearch,
    Signature,
    User,
} from "lucide-react";
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
    {
        path: "/performance-demo",
        label: "Performance Demo",
        icon: ChevronsUp,
    },
    {
        path: "/focus-demo",
        label: "Focus Demo",
        icon: ScanSearch,
    },
    {
        path: "/hoc-demo",
        label: "HOC Demo",
        icon: Columns3Cog,
    },
    {
        path: "/render-props-demo",
        label: "Render Props",
        icon: Signature,
    },
    {
        path: "/custom-hooks-demo",
        label: "Custom Hook Props",
        icon: Gavel,
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
