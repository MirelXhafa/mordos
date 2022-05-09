import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { ReactNode } from "react";
import "./styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element | void | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`backdrop ${isOpen ? "visible" : ""}`}>
      <div className="modal">
        <div className="modal-header">
          <h3>Gallery</h3>
          <span onClick={onClose}>
            <FontAwesomeIcon icon={faClose} />
          </span>
        </div>
        <div className="modal-content">{children ?? null}</div>
      </div>
    </div>
  );
};

export default Modal;
