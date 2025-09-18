import classNames from "classnames/bind";
import styles from "./TriggerBtns.module.scss";
import Button from "@/components/Button/Button";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function TriggerBtns({ onToggleUser, onToggleProduct }) {
    return (
        <div className={cx("wrap")}>
            <Button primary onClick={onToggleUser}>
                Toggle loading User Profile
            </Button>
            <Button primary onClick={onToggleProduct}>
                Toggle loading Product list
            </Button>
        </div>
    );
}

TriggerBtns.propTypes = {
    onToggleUser: PropTypes.func,
    onToggleProduct: PropTypes.func,
};

export default TriggerBtns;
