import classNames from "classnames/bind";
import styles from "./Avatar.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Avatar({ avatarUrl }) {
    return (
        <div className={cx("avatar-wrap")}>
            <img
                className={cx("avatar")}
                src={
                    avatarUrl
                        ? avatarUrl
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
            />
        </div>
    );
}

Avatar.propTypes = {
    avatarUrl: PropTypes.string,
};

export default Avatar;
