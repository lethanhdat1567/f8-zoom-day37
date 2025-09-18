import classNames from "classnames/bind";
import styles from "./DataFetcher.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function DataFetcher({ url, children }) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            })
            // @ts-ignore
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className={cx("wrap")}>{children({ data, loading, error })}</div>
    );
}

DataFetcher.propTypes = {
    url: PropTypes.string,
    children: PropTypes.func,
};

export default DataFetcher;
