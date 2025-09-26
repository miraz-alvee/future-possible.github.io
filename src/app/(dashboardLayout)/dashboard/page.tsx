import React from "react";
import {
    IoHeartCircleOutline,
    IoCloudUploadOutline,
} from "react-icons/io5";

import { CiSettings } from "react-icons/ci";
import { PiBookOpenTextThin } from "react-icons/pi";
import { GiArtificialHive } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
    const steps = [
        { label: "Welcome", icon: <IoHeartCircleOutline size={27} />, active: true },
        { label: "Test CSV Import", icon: <IoCloudUploadOutline size={27} />, active: false },
        { label: "Ai Configuration", icon: <GiArtificialHive size={27} />, active: false },
        { label: "Create First", icon: <PiBookOpenTextThin size={27} />, active: false },
        { label: "Setup Complete", icon: <CiSettings size={27} />, active: false },
    ];

    return (
        <>
            <hr className="border-[#ECE8F2] mt-6 opacity-35" />
            <div className="w-full flex justify-center mt-8">
                <div className="flex items-center justify-between w-[85%] md:w-[70%] lg:w-[60%] relative">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center relative w-full">
                            {/* Connector line with gradient */}
                            {index !== steps.length - 1 && (
                                <div className="absolute top-6 left-1/2 w-full h-[6px] bg-gradient-to-r from-[#682ECC] to-[#E9DDFF] z-0"></div>
                            )}

                            {/* Step Icon */}
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-xl border-1 z-10 relative bg-white ${step.active ? "border-[#682ECC] text-[#682ECC]" : "border-gray-200 text-gray-500"
                                    }`}
                            >
                                {step.icon}
                            </div>

                            {/* Step Label */}
                            <p
                                className={`mt-2 text-sm font-semibold ${step.active ? "text-[#363636]" : "text-gray-500"
                                    }`}
                            >
                                {step.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-7xl min-h-[686px] bg-[#F9F9FD] rounded-3xl mt-10 mx-auto p-6 flex flex-col items-center">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-[#363636] text-center mb-4 mt-10">Welcome to Your Training Platform</h1>
                <p className="text-base text-[#555] text-center max-w-2xl mb-10">
                    We'll guide you through setting up your training environment in just a few steps. This should take about 10 minutes.
                </p>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full">
                        <div className="shadow-md rounded-xl size-13 p-2 cursor-pointer hover:shadow-md transition-shadow">
                            <IoHeartCircleOutline />
                        </div>
                        <h2 className="text-lg font-semibold text-[#363636] mb-2">Card Title 1</h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full">
                        <IoHeartCircleOutline className="text-5xl mb-4" />
                        <h2 className="text-lg font-semibold text-[#363636] mb-2">Card Title 2</h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full">
                        <IoHeartCircleOutline className="text-5xl mb-4" />
                        <h2 className="text-lg font-semibold text-[#363636] mb-2">Card Title 3</h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <Link href="/trainee-dashboard">
                    <div className="mt-14">
                        <Button type="submit" className="text-[#FFFFFF] bg-gradient-to-r from-[#682ECC] to-[#431A88] h-16 rounded-3xl font-poppins font-semibold text-xl leading-[100%] px-14 py-3 cursor-pointer">
                            Next
                        </Button>
                    </div>
                </Link>
            </div>
        </>
    );
}
