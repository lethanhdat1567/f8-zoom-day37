import classNames from "classnames/bind";
import styles from "./ExpensiveChild.module.scss";
import PropTypes from "prop-types";
// @ts-ignore
import { memo, useMemo } from "react";

const cx = classNames.bind(styles);

// @ts-ignore
const ExpensiveChild = memo(({ items }) => {
    console.log("ExpensiveChild: ", "component re-render");

    const totalNameLength = useMemo(() => {
        console.log("Tính toán nặng");

        return items.reduce((acc, cur) => {
            return acc + cur.name.length;
        }, 0);
    }, [items]);

    return (
        <div className={cx("list-wrap")}>
            <ul className={cx("list")}>
                {items.map((user) => (
                    <li className={cx("item")} key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
            <div className={cx("footer")}>
                <span className={cx("total")}>Total: {totalNameLength}</span>
            </div>
        </div>
    );
});

ExpensiveChild.displayName = "ExpensiveChild";

// @ts-ignore
ExpensiveChild.propTypes = {
    items: PropTypes.array,
};

export default ExpensiveChild;
