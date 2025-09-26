'use client';
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import loginImage from "../../../public/signup.png";
import loginLogo from "../../../public/login-logo.png";
import googleImage from "../../../public/google.svg";
import microsoftImage from "../../../public/microsoft.svg";

import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { FcManager } from "react-icons/fc";
import Link from "next/link";

export default function  SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="">
            <div className="flex flex-col md:flex-row">
                {/* Left Image Section */}
                <div className="hidden md:block w-full md:w-1/2">
                    <Image
                        src={loginImage}
                        alt="Login Image"
                        className="w-full object-cover" // Adjusted for rounded corners if needed
                    />
                </div>
                <div>
                    <Image
                        src={loginLogo}
                        alt="Login Logo"
                        className="absolute top-6 left-8 w-76 h-auto" // Adjust the size as needed
                    />
                </div>

                {/* Right Form Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
                    <Card className="w-[740px] max-w-2xl h-[900px] mx-auto bg-[#FFFFFF] shadow-lg border-none rounded-4xl">
                        <CardHeader>
                            <CardTitle className="font-poppins font-bold text-5xl leading-[100%] tracking-normal capitalize p-10">Sign Up</CardTitle>
                            <CardDescription className="font-poppins text-[#454545] text-base font-normal leading-[34px] tracking-normal px-10">
                                Please enter your details to log in to your account !
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6 mb-6">
                            <form className="px-10">
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="text-[#545454] font-poppins font-normal text-lg leading-[100%]">
                                           Name
                                        </Label>
                                        <div className="relative">
                                            {/* Email Input */}
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                required
                                                className="h-16 border border-[#EAE6F0] rounded-2xl px-4 py-2 text-[#0d0101] text-2xl font-semibold"  // Add left padding to make space for the icon
                                            />
                                            {/* Email Icon */}
                                            <FcManager
                                                size={24}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#545454]"  // Position the icon
                                            />
                                            
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="text-[#545454] font-poppins font-normal text-lg leading-[100%]">
                                            Email
                                        </Label>
                                        <div className="relative">
                                            {/* Email Input */}
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="jhon.doe.1830@gmail.com"
                                                required
                                                className="h-16 border border-[#EAE6F0] rounded-2xl px-4 py-2 text-[#0d0101] text-2xl font-semibold"  // Add left padding to make space for the icon
                                            />
                                            {/* Email Icon */}
                                            <FaEnvelope
                                                size={24}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#545454]"  // Position the icon
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="password" className="text-[#545454] font-poppins font-normal text-lg leading-[100%]">
                                            Password
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"} // Toggle type based on state
                                                placeholder="***********"
                                                required
                                                className="h-16 border border-[#EAE6F0] rounded-2xl px-4 py-2 text-[#0d0101] text-2xl"
                                            />
                                            {/* Eye Icon */}
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                            >
                                                {showPassword ? (
                                                    <FaEyeSlash size={24} /> // Eye Slash when password is visible
                                                ) : (
                                                    <FaEye size={24} /> // Eye Icon when password is hidden
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-2 space-y-4">
                            <Button type="submit" className="text-[#FFFFFF] bg-gradient-to-r from-[#682ECC] to-[#431A88] h-16 rounded-3xl font-poppins font-semibold text-xl leading-[100%] px-14 py-3 cursor-pointer">
                                Log In
                            </Button>
                            <CardDescription className="font-poppins text-[#454545] text-base font-normal leading-[34px] tracking-normal px-10">
                                Or log in with
                            </CardDescription>
                            <div className="flex gap-4 px-10">
                                {/* Google Button */}
                                <Button variant="outline" className="px-10 py-7 flex items-center text-base rounded-2xl gap-2 cursor-pointer">
                                    <Image
                                        src={googleImage}
                                        alt="Google Logo"
                                        width={26} // Adjust the width to match the size you want
                                        height={26} // Adjust the height to match the size you want
                                    />
                                    Google
                                </Button>

                                {/* Microsoft Button */}
                                <Button variant="outline" className="px-10 py-7 flex items-center text-base rounded-2xl gap-2 cursor-pointer">
                                    <Image
                                        src={microsoftImage}
                                        alt="Microsoft Logo"
                                        width={26} // Adjust the width to match the size you want
                                        height={26} // Adjust the height to match the size you want
                                    />
                                    Microsoft
                                </Button>
                            </div>

                            <CardAction className="flex mx-auto mt-3">
                                <p className=" mt-2">Already have an account?</p>
                                <Link href="/login">
                                    <Button variant="link" className="font-poppins text-[#682ECC] text-lg font-semibold leading-8">Log In</Button>
                                </Link>
                            </CardAction>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}

