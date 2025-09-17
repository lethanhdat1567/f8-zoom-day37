// @ts-nocheck
import Modal from "@/components/Modal";
import ModalButton from "../ModalButton/ModalButton";
import { useRef, useState } from "react";
import ModalContent from "../ModalContent/ModalContent";
import PropTypes from "prop-types";

function RefModal({ title }) {
    const modalRef = useRef(null);

    function handleToggle() {
        if (modalRef) {
            modalRef.current.toggle();
        }
    }

    return (
        <div>
            <ModalButton onClick={handleToggle}>{title}</ModalButton>
            <Modal
                Modal
                shouldCloseOnEsc={false}
                onRequestClose={handleToggle}
                closeTimeoutMS={300}
                onAfterOpen={() => console.log("Mở modal")}
                onAfterClose={() => console.log("Đóng modal")}
                ref={modalRef}
            >
                <ModalContent
                    desc={"Đây là ref container modal"}
                    onClose={handleToggle}
                />
            </Modal>
        </div>
    );
}

RefModal.propTypes = {
    title: PropTypes.string.isRequired,
};

export default RefModal;
