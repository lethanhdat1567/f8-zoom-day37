// @ts-nocheck
import classNames from "classnames/bind";
import styles from "./CustomInputs.module.scss";
import CustomInput from "@/components/CustomInput/CustomInput";
import Button from "@/components/Button/Button";
import { useRef } from "react";

const cx = classNames.bind(styles);

function CustomInputs() {
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);

    function handleFocusInput1() {
        if (input1Ref) {
            input1Ref.current.focus();
        }
    }

    function handleFocusInput2() {
        if (input2Ref) {
            input2Ref.current.focus();
        }
    }

    function handleClearValue() {
        if (input1Ref && input2Ref) {
            input1Ref.current.setValue("");
            input2Ref.current.setValue("");
        }
    }

    function handleGetValues() {
        if (input1Ref && input2Ref) {
            alert(
                `Input 1: ${input1Ref.current.getValue()}\nInput 2: ${input2Ref.current.getValue()}`
            );
        }
    }

    return (
        <div className={cx("wrapper")}>
            <CustomInput
                // @ts-ignore
                label="Custom input 1"
                ref={input1Ref}
            />
            <CustomInput
                // @ts-ignore
                label="Custom input 2"
                ref={input2Ref}
            />

            <div className={cx("buttons")}>
                <Button onClick={handleFocusInput1}>Focus input 1</Button>
                <Button onClick={handleFocusInput2}>Focus input 2</Button>
                <Button onClick={handleClearValue}>Clear Both</Button>
                <Button onClick={handleGetValues}>Get values</Button>
            </div>
        </div>
    );
}

export default CustomInputs;
