import classNames from "classnames/bind";
import styles from "./ModalDemo.module.scss";
import Modal from "@/components/Modal";
import BasicModal from "./components/BasicModal/BasicModal";
import AnimationModal from "./components/AnimationModal/AnimationModal";
import OverlayModal from "./components/OverlayModal/OverlayModal";
import ESCModal from "./components/ESCModal/ESCModal";
import CustomModal from "./components/CustomModal/CustomModal";
import CallBackModal from "./components/CallBackModal/CallBackModal";

const cx = classNames.bind(styles);

function ModalDemo() {
    return (
        <div className={cx("wrap")}>
            <BasicModal />
            <AnimationModal />
            <OverlayModal />
            <ESCModal />
            <CustomModal />
            <CallBackModal />
        </div>
    );
}

export default ModalDemo;
