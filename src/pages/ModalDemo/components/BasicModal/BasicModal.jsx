import classNames from "classnames/bind";
import styles from "./BasicModal.module.scss";
import Modal from "@/components/Modal";
import ModalButton from "../ModalButton/ModalButton";
import { useState } from "react";
import { X } from "lucide-react";
import ModalContent from "../ModalContent/ModalContent";

const cx = classNames.bind(styles);

function BasicModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={cx("wrap")}>
            <ModalButton onClick={() => setShowModal(true)}>
                Basic modal
            </ModalButton>
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <ModalContent
                    desc={"Đây là basic modal"}
                    onClose={() => setShowModal(false)}
                />
            </Modal>
        </div>
    );
}

export default BasicModal;
