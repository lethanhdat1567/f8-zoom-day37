import classNames from "classnames/bind";
import styles from "./UserMenu.module.scss";
import Dropdown from "@/components/Dropdown";
import UserInfo from "./components/UserInfo/UserInfo";
import UserMenuItems from "./components/UserMenuItems/UserMenuItems";
import { useState } from "react";

const cx = classNames.bind(styles);

function UserMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className={cx("wrapper")}>
            <img
                onClick={() => setOpen(true)}
                className={cx("avatar")}
                src="https://files.fullstack.edu.vn/f8-prod/public-images/68c5715d0037b.png"
            />
            <Dropdown
                open={open}
                onClose={() => setOpen(false)}
                position="bottom-right"
                width="240px"
            >
                <div className={cx("dropdown")}>
                    <UserInfo />
                    <UserMenuItems />
                </div>
            </Dropdown>
        </div>
    );
}

export default UserMenu;
