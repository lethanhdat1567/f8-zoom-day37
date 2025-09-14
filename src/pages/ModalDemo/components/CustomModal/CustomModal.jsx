import classNames from "classnames/bind";
import styles from "./CustomModal.module.scss";

import Modal from "@/components/Modal";
import ModalButton from "../ModalButton/ModalButton";
import { useState } from "react";
import ModalContent from "../ModalContent/ModalContent";

const cx = classNames.bind(styles);

function CustomModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <ModalButton
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Custom classname modal
            </ModalButton>
            <Modal
                isOpen={showModal}
                shouldCloseOnEsc={false}
                onRequestClose={() => setShowModal(false)}
                closeTimeoutMS={300}
                className={cx("custom-modal")}
            >
                <ModalContent
                    desc={"Đây là custom container modal"}
                    onClose={() => setShowModal(false)}
                />
            </Modal>
        </div>
    );
}

export default CustomModal;
