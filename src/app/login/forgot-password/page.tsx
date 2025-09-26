'use client';
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import loginImage from "../../../../public/forgot_iamge.png";
import loginLogo from "../../../../public/login-logo.png";

import { FaEnvelope} from 'react-icons/fa';
import Link from "next/link";

export default function LoginPage() {
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
                    <Card className="w-[740px] max-w-2xl h-[520px] mx-auto bg-[#FFFFFF] shadow-lg border-none rounded-4xl">
                        <CardHeader>
                            <CardTitle className="font-poppins font-bold text-5xl leading-[100%] tracking-normal capitalize p-10">Forgot Password</CardTitle>
                            <CardDescription className="font-poppins text-[#454545] text-base font-normal leading-[34px] tracking-normal px-10">
                                Please Enter your email address and we'll send you a link to reset your password
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-2">
                            <form className="px-10">
                                <div className="flex flex-col gap-6">
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
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="text-[#FFFFFF] bg-gradient-to-r from-[#682ECC] to-[#431A88] h-16 rounded-3xl font-poppins font-semibold text-xl leading-[100%] px-14 py-3 cursor-pointer mt-3">
                                Send Reset Email
                            </Button>
                            <CardAction className="flex mx-auto mt-3">
                                <Link href="/login">
                                    <Button variant="link" className="font-poppins text-[#682ECC] text-lg font-semibold leading-8 mb-6">Back to Login</Button>
                                </Link>
                            </CardAction>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
