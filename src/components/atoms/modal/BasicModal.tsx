import Modal from "react-modal";

export type BasicModalProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  style?: string;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
};

const BasicModal: React.FC<BasicModalProps> = ({
  children,
  isOpen,
  closeModal,
  onAfterOpen,
  onAfterClose,
  style,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      onRequestClose={closeModal}
    >
      {children}
    </Modal>
  );
};

export default BasicModal;
