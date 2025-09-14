import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import Avatar from "./components/Avatar/Avatar";
import Tool from "./components/Tool/Tool";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Profile() {
    const [avatarUrl, setAvatarUrl] = useState("");

    function handleUpdate(file) {
        setAvatarUrl(() => URL.createObjectURL(file));
    }

    function handleDestroy() {
        setAvatarUrl("");
    }

    console.log(avatarUrl);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatarUrl);
        };
    }, [avatarUrl]);

    return (
        <div className={cx("wrapper")}>
            <Avatar avatarUrl={avatarUrl} />
            <Tool onUpload={handleUpdate} onDestroy={handleDestroy} />
        </div>
    );
}

export default Profile;
