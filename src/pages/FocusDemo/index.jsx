import classNames from "classnames/bind";
import styles from "./FocusDemo.module.scss";
import Counter from "./components/Counter/Counter";
import CustomInputs from "./components/CustomInputs/CustomInputs";
import { useState } from "react";

const cx = classNames.bind(styles);

function FocusDemo() {
    const [triggerRerender, setTriggerRerender] = useState(Math.random());

    function handleTrigger() {
        setTriggerRerender(Math.random());
    }

    return (
        <div className={cx("wrap")}>
            <Counter onTrigger={handleTrigger} />
            <div className={cx("seperate")}></div>
            <CustomInputs />
        </div>
    );
}

export default FocusDemo;
