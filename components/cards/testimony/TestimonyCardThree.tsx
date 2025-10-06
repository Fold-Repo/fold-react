"use client"

import React from "react"
import Image from "next/image"

interface TestimonyCardThreeProps {
    testimony: {
        id: string
        content: string
        author: {
            name: string
            role: string
            image: string
        }
    }
}

const TestimonyCardThree: React.FC<TestimonyCardThreeProps> = ({ testimony }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl text-center p-10 space-y-7 shadow-lg border border-gray-200 dark:border-gray-500">
            
            <div className="space-y-3">
                <Image
                    src={testimony.author.image}
                    alt="Avatar"
                    width={64}
                    height={64}
                    className="size-16 border-2 mx-auto border-white rounded-full object-cover"
                />
                <div className="">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        {testimony.author.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-300">
                        {testimony.author.role}
                    </p>
                </div>
            </div>

            <p className="text-sm leading-6 dark:text-gray-300 text-gray-700">
                &ldquo;{testimony.content}&rdquo;
            </p>

        </div>
    )
}

export { TestimonyCardThree }
