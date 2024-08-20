import { RefObject } from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  children: React.ReactNode;
  dialogRef: RefObject<HTMLDialogElement>
  toggleDialog: () => void;
}

export default function Modal(props: ModalProps) {
  return (
    <dialog ref={props.dialogRef}
      className="w-80 backdrop:bg-black backdrop:bg-opacity-50 backdrop:backdrop-blur-md bg-blur backdrop-blur-3xl overflow-hidden rounded-xl cursor-default p-3"
    >
      <div className="flex">
        <button onClick={props.toggleDialog} className="z-10 cursor-pointer text-white mb-2 p-1 rounded-full outline-none">
          <AiOutlineClose size={24} />
        </button>
      </div>

      {props.children}
      <div className="border-modal" />
    </dialog>
  )
}