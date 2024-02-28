import Modal from "react-modal";

Modal.setAppElement("#main-layout");

export type BasicModalProps = {
  id?: string;
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
    maxWidth: "90vw", // Set maximum width to 90% of viewport width
    maxHeight: "90vh", // Set maximum height to 90% of viewport height
    width: "auto", // Allow width to adjust based on content
    height: "auto", // Allow height to adjust based on content
    padding: "1rem", // Add padding for better readability
  },
};

const BasicModal: React.FC<BasicModalProps> = ({
  id,
  children,
  isOpen,
  closeModal,
  onAfterOpen,
  onAfterClose,
}) => {
  return (
    <Modal
      id={id || ""}
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
