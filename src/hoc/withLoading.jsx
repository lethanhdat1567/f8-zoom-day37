import classNames from "classnames/bind";
import styles from "./withLoading.module.scss";
import { useState } from "react";
import { Loader } from "lucide-react";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const withLoading = (Component) => {
    const WrapperComponent = ({ isLoading }) => {
        if (isLoading)
            return (
                <div className={cx("loading-wrap")}>
                    <Loader />
                    <span className={cx("loading-text")}>Loading...</span>
                </div>
            );
        return <Component />;
    };

    WrapperComponent.propTypes = {
        isLoading: PropTypes.bool,
    };

    return WrapperComponent;
};

export default withLoading;
