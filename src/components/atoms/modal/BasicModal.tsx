import Modal from "react-modal";

export type BasicModalProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  style?: string;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
};

const customOverlay = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000, // Adjust the z-index as needed
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "0.75rem",
  },
};

Modal.setAppElement("#main-layout");

const BasicModal: React.FC<BasicModalProps> = ({
  children,
  isOpen,
  closeModal,
  onAfterOpen,
  onAfterClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      onRequestClose={closeModal}
      style={customOverlay}
    >
      {children}
    </Modal>
  );
};

export default BasicModal;
