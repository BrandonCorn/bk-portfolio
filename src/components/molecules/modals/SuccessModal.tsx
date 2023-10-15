import BasicModal, {
  BasicModalProps,
} from "@/components/atoms/modal/BasicModal";

export interface SuccessModalProps extends BasicModalProps {
  title: string;
  message: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  closeModal,
  onAfterClose,
  onAfterOpen,
  title,
  message,
}) => {
  return (
    <BasicModal
      isOpen={isOpen}
      closeModal={closeModal}
      onAfterClose={onAfterClose}
      onAfterOpen={onAfterOpen}
    >
      <div className="">
        <div className=" mx-auto shadow-xl rounded-md bg-white max-w-md">
          <div>
            <h2 className="text-lg text-white dark:text-black">{title}</h2>
          </div>
          <p className="text-md text-zinc-200 dark:text-zinc-800">{message}</p>
        </div>
      </div>
      <a
        className="hidden"
        href="https://icons8.com/icon/pIPl8tqh3igN/checkmark"
      >
        Success
      </a>{" "}
      icon by{" "}
      <a className="hidden" href="https://icons8.com">
        Icons8
      </a>
    </BasicModal>
  );
};

export default SuccessModal;
