import classNames from "classnames/bind";
import styles from "./TriggerBtns.module.scss";
import Button from "@/components/Button/Button";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function TriggerBtns({
    userLoading,
    productLoading,
    onToggleUser,
    onToggleProduct,
}) {
    return (
        <div className={cx("wrap")}>
            <Button primary={userLoading} onClick={onToggleUser}>
                Toggle loading User Profile
            </Button>
            <Button primary={productLoading} onClick={onToggleProduct}>
                Toggle loading Product list
            </Button>
        </div>
    );
}

TriggerBtns.propTypes = {
    userLoading: PropTypes.bool,
    productLoading: PropTypes.bool,
    onToggleUser: PropTypes.func,
    onToggleProduct: PropTypes.func,
};

export default TriggerBtns;
