import classNames from "classnames/bind";
import styles from "./AnimationModal.module.scss";
import Modal from "@/components/Modal";
import ModalButton from "../ModalButton/ModalButton";
import { useState } from "react";
import { X } from "lucide-react";
import ModalContent from "../ModalContent/ModalContent";

const cx = classNames.bind(styles);

function AnimationModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <section>
            <ModalButton onClick={() => setShowModal(true)}>
                Open Animated Modal
            </ModalButton>
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                closeTimeoutMS={300}
            >
                <ModalContent
                    desc={"Đây là animation modal"}
                    onClose={() => setShowModal(false)}
                />
            </Modal>
        </section>
    );
}

export default AnimationModal;
