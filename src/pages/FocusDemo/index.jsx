import classNames from "classnames/bind";
import styles from "./FocusDemo.module.scss";
import Counter from "./components/Counter/Counter";
import CustomInputs from "./components/CustomInputs/CustomInputs";

const cx = classNames.bind(styles);

function FocusDemo() {
    return (
        <div className={cx("wrap")}>
            <Counter />
            <div className={cx("seperate")}></div>
            <CustomInputs />
        </div>
    );
}

export default FocusDemo;
