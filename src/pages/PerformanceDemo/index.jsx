import classNames from "classnames/bind";
import styles from "./PerformanceDemo.module.scss";
import { useCallback, useEffect, useState } from "react";
import CounterDisplay from "./components/CounterDisplay/CounterDisplay";
import ExpensiveChild from "./components/ExpensiveChild/ExpensiveChild";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import Button from "@/components/Button/Button";

const cx = classNames.bind(styles);

function PerformanceDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Le Thanh Dat");
    const [items, setItems] = useState([]);

    // Expensive child
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => setItems(users))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Counter
    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleResetCount = useCallback(() => {
        setCount(0);
    }, []);

    // Name
    function handleChangeName() {
        if (items.length > 0) {
            setName(() => items[Math.floor(Math.random() * items.length)].name);
        } else {
            setName("Le Thanh Dat");
        }
    }

    // Items
    function handeAddItem() {
        setItems((prev) => [
            {
                id: prev.length + 1,
                name: `User ${prev.length + 1}`,
            },
            ...prev,
        ]);
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("section-content")}>
                <h1 className={cx("title")}>PerformanceDemo</h1>
                <p className={cx("name")}>Tên người dùng: {name}</p>
                <CounterDisplay
                    // @ts-ignore
                    count={count}
                />
                <ActionButtons
                    // @ts-ignore
                    onIncrement={handleIncrement}
                    onReset={handleResetCount}
                />
                <div className={cx("buttons-wrapper")}>
                    <Button
                        size="large"
                        className={cx("btn-item")}
                        onClick={handleIncrement}
                    >
                        Increment count
                    </Button>
                    <Button
                        size="large"
                        className={cx("btn-item")}
                        onClick={handleChangeName}
                    >
                        Change name
                    </Button>
                </div>
            </div>
            <div className={cx("section-content")}>
                <Button className={cx("add-item-btn")} onClick={handeAddItem}>
                    Add item
                </Button>
                <ExpensiveChild
                    // @ts-ignore
                    items={items}
                />
            </div>
        </div>
    );
}

export default PerformanceDemo;
