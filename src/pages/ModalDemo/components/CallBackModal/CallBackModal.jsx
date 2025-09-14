import Modal from "@/components/Modal";
import ModalButton from "../ModalButton/ModalButton";
import { useState } from "react";
import ModalContent from "../ModalContent/ModalContent";

function CallBackModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <ModalButton
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Callback modal
            </ModalButton>
            <Modal
                isOpen={showModal}
                shouldCloseOnEsc={false}
                onRequestClose={() => setShowModal(false)}
                closeTimeoutMS={300}
                onAfterOpen={() => console.log("Mở modal")}
                onAfterClose={() => console.log("Đóng modal")}
            >
                <ModalContent
                    desc={"Đây là callback container modal"}
                    onClose={() => setShowModal(false)}
                />
            </Modal>
        </div>
    );
}

export default CallBackModal;
