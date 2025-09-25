import { PopupModal } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react"

interface ShareModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordSuccessModal: React.FC<ShareModalProps> = ({ open, setOpen }) => {
    return (
        <PopupModal
            size="2xl"
            isOpen={open}
            onClose={() => setOpen(true)}
            placement="center"
            showCloseButton={false}
            className="max-h-[80vh] bg-white dark:bg-gray-800">

            <div className="flex flex-col items-center justify-center py-10 space-y-10 w-full px-6 xl:px-12">

                <Image src="/icon/lock.svg" alt="Password Reset Success"
                    width={80} height={80} className="w-20" />

                <div className="space-y-2 text-center">

                    <h2 className="font-semibold text-lg 2xl:text-xl text-gray-900 dark:text-white">
                        Reset Password Success
                    </h2>

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Please re-login with your new password
                    </p>

                </div>

                <Link href="/signin" className="btn btn-brand w-full">
                    Login
                </Link>

            </div>

        </PopupModal>
    )
}

export default PasswordSuccessModal