import classNames from "classnames/bind";
import styles from "./UserMenuItems.module.scss";

const cx = classNames.bind(styles);

const userMenu = [
    {
        group: "main",
        items: [{ id: 1, label: "Trang cá nhân", path: "/profile" }],
    },
    {
        group: "blogs",
        items: [
            { id: 2, label: "Viết blog", path: "/blog/new" },
            { id: 3, label: "Bài viết của tôi", path: "/blog/mine" },
            { id: 4, label: "Bài viết đã lưu", path: "/blog/saved" },
        ],
    },
    {
        group: "settings",
        items: [
            { id: 5, label: "Cài đặt", path: "/settings" },
            { id: 6, label: "Đăng xuất", path: "/logout" },
        ],
    },
];

function UserMenuItems() {
    return (
        <ul className={cx("lists")}>
            {userMenu.map((block, index) => {
                return (
                    <div key={index}>
                        <div className={cx("seperate")}></div>
                        {block.items.map((item) => (
                            <li key={item.id} className={cx("item")}>
                                {item.label}
                            </li>
                        ))}
                    </div>
                );
            })}
        </ul>
    );
}

export default UserMenuItems;
