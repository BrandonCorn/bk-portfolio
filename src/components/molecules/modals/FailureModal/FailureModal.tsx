"use client";
import BasicModal, {
  BasicModalProps,
} from "@/components/atoms/modal/BasicModal";
import Image from "next/image";

export interface SuccessModalProps extends BasicModalProps {
  title: string;
  message: string;
}

const FailureModal: React.FC<SuccessModalProps> = ({
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
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg text-center w-2/3 shadow-2xl p-16 m-16 space-y-4">
          <div className="flex justify-center items-center">
            <Image
              src={"/cat-failure.svg"}
              alt={"failure cat"}
              width={50}
              height={50}
            />
          </div>
          <div>
            <h2 className="text-xl text-black dark:text-black">{title}</h2>
          </div>
          <p className="text-md text-zinc-800 dark:text-zinc-800">{message}</p>
        </div>
      </div>
    </BasicModal>
  );
};

export default FailureModal;
