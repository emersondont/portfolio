import { RefObject } from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  children: React.ReactNode;
  dialogRef: RefObject<HTMLDialogElement>
  toggleDialog: () => void;
}

export default function Modal(props: ModalProps) {
  return (
    <dialog
      ref={props.dialogRef}
      onClick={props.toggleDialog}
      className="w-96 backdrop:bg-black backdrop:bg-opacity-30 backdrop:backdrop-blur-md bg-transparent hover:bg-transparent p-0 overflow-hidden rounded-xl"
    >
      <div onClick={e => e.stopPropagation()} className="bg-blur overflow-hidden rounded-xl cursor-default p-3 flex flex-col items-center">
        <button onClick={props.toggleDialog} className="z-10 cursor-pointer text-white mb-2 p-1 rounded-full outline-none ml-auto">
          <AiOutlineClose size={24} />
        </button>

        {props.children}
        <div className="border-modal" />
      </div>
    </dialog>
  )
}