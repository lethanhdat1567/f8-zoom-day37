import Modal from "@/components/Modal";
import ModalButton from "../ModalButton/ModalButton";
import { useState } from "react";
import ModalContent from "../ModalContent/ModalContent";

function ESCModal() {
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
                shouldCloseOnEsc={false}
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

export default ESCModal;
