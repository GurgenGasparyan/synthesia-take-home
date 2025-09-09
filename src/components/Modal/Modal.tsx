import { type FC } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import "./Modal.css";

interface PreviewProps {
  onClose: () => void;
  imageUrl: string;
  width: number;
  height: number;
  children: React.ReactNode;
  actionButton: React.ReactNode;
}

 const Modal: FC<PreviewProps> = ({
  onClose,
  children,
  actionButton
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    createPortal(
      <div
        className="modal-backdrop"
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
      >
        <div className="modal">
          <div className="modal-content">
            {children}
          </div>

          <div className="modal-footer">
            <Button label="Close" onClick={onClose} />
            {actionButton}
          </div>
        </div>
      </div>
      , document.getElementById('preview')!)
  );
};

export default Modal;
