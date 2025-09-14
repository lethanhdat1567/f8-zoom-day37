import classNames from "classnames/bind";
import styles from "./OverlayModal.module.scss";
import ModalButton from "../ModalButton/ModalButton";
import Modal from "@/components/Modal";
import ModalContent from "../ModalContent/ModalContent";
import { useState } from "react";

const cx = classNames.bind(styles);

function OverlayModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <ModalButton
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Non overlay modal
            </ModalButton>
            <Modal
                isOpen={showModal}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setShowModal(false)}
                closeTimeoutMS={300}
            >
                <ModalContent
                    desc={"Đây là none overlay modal"}
                    onClose={() => setShowModal(false)}
                />
            </Modal>
        </div>
    );
}

export default OverlayModal;
