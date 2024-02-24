"use client";
import BasicModal, {
  BasicModalProps,
} from "@/components/atoms/Modals/BasicModal";
import Image from "next/image";
import { motion } from "framer-motion";

export interface SuccessModalProps extends BasicModalProps {
  title: string;
  message: string;
  alt?: string;
  imgSrc?: string;
  height?: number;
  width?: number;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  closeModal,
  onAfterClose,
  onAfterOpen,
  title,
  message,
  alt,
  imgSrc,
  height,
  width,
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
          <div className="flex justify-center items-center text-center">
            <Image
              alt={alt || "success cat"}
              src={imgSrc || "/cat-success.svg"}
              width={width || 50}
              height={height || 50}
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

export default SuccessModal;
