import classNames from "classnames/bind";
import styles from "./Notification.module.scss";
import { Bell } from "lucide-react";
import { useState } from "react";
import NotiDropdown from "./NotiDropdown/NotiDropdown";

const cx = classNames.bind(styles);

function Notification() {
    const [open, setOpen] = useState(false);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("bell-wrap")} onClick={() => setOpen(true)}>
                <span className={cx("bagde")}>3</span>
                <Bell size={22} className={cx("icon")} />
            </div>
            <NotiDropdown open={open} onClose={() => setOpen(false)} />
        </div>
    );
}

export default Notification;
