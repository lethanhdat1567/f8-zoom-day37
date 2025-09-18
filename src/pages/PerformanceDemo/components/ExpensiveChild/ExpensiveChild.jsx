import classNames from "classnames/bind";
import styles from "./ExpensiveChild.module.scss";
import PropTypes from "prop-types";
// @ts-ignore
import { memo, useMemo } from "react";

const cx = classNames.bind(styles);

// @ts-ignore
const ExpensiveChild = memo(({ items }) => {
    // Log re-render
    console.log("ExpensiveChild: ", "component re-render");

    const totalNameLength = useMemo(() => {
        console.log("Tính toán nặng");
        return items.reduce((acc, cur) => {
            return acc + cur.name.length;
        }, 0);
    }, [items]);

    // Tính toán nặng: tìm item có tên dài nhất
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating longest name...");
        let longest = "";
        items.forEach((item) => {
            for (let i = 0; i < 100000; i++) {}
            if (item.name.length > longest.length) {
                longest = item.name;
            }
        });
        return longest;
    }, [items]);

    // Without useMemo
    // const expensiveCalculation = (() => {
    //     console.log("Calculating longest name...");
    //     let longest = "";
    //     items.forEach((item) => {
    //         for (let i = 0; i < 10000000; i++) {}
    //         if (item.name.length > longest.length) {
    //             longest = item.name;
    //         }
    //     });
    //     return longest;
    // })();

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
                <span className={cx("total")}>
                    Tổng độ dài của các tên: {totalNameLength}
                </span>
                <span className={cx("total")}>
                    Tên có độ dài dài nhất: {expensiveCalculation}
                </span>
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
