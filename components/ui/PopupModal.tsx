import { cn } from "@/lib";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
    Modal,
    ModalContent,
    ModalBody,
} from "@heroui/modal";
import { ReactElement, ReactNode } from "react";

const PopupModal = ({
    isOpen,
    onClose,
    size,
    backdrops,
    placement,
    className,
    name,
    children,
    showCloseButton = true,
    title
}: {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    name?: string;
    children?: string | ReactElement | ReactNode | ReactElement[] | ReactNode[];
    backdrops?: "opaque" | "blur" | "transparent" | undefined;
    size?: "xl" | "xs" | "sm" | "md" | "lg" | "2xl" | "3xl" | "4xl" | "5xl" | "full" | undefined;
    placement?: "center" | "auto" | "top" | "top-center" | "bottom" | "bottom-center" | undefined;
    showCloseButton?: boolean;
    title?: string | ReactNode;
}) => {

    return (
        <Modal
            id={name ? name : `modal-${Date.now()}`}
            size={size ? size : "lg"}
            isOpen={isOpen}
            onClose={onClose}
            className={cn("py-4", className)}
            classNames={{
                closeButton: "hidden",
                base: "bg-white dark:bg-gray-900 rounded-lg shadow-lg",
            }}
            placement={placement ? placement : "center"}
            scrollBehavior="inside"
            backdrop={backdrops ? backdrops : "opaque"}>
            <ModalContent>
                {(onClose) => (
                    <ModalBody className="px-3 sm:px-5">

                        {(title || showCloseButton) && (
                            <div className="flex items-center justify-between mt-3 mb-4">
                                {title ? (
                                    <h2 className="text-base lg:text-lg font-bold text-gray-800 dark:text-gray-100">{title}</h2>
                                ) : <div />}
                                {showCloseButton && (
                                    <button onClick={onClose}
                                        className="bg-gray-200 dark:bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full p-1 cursor-pointer" >
                                        <XMarkIcon className="h-4 w-4 text-black dark:text-gray-200" />
                                    </button>
                                )}
                            </div>
                        )}

                        {children}

                    </ModalBody>
                )}
            </ModalContent>
        </Modal>
    );
};

export default PopupModal;
