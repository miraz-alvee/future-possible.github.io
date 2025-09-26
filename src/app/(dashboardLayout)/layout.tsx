"use client"
import { AppSidebar } from "@/components/modules/app-sidebar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { IoIosArrowDropdown, IoIosSearch, IoMdNotifications } from "react-icons/io"
import profileImage from '../../../public/profile-image.png'
import Image from "next/image"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex justify-between h-20 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-[#ffffff]">

                    {/* Left section → Sidebar trigger + Search bar */}
                    <div className="flex items-center gap-4">
                        <SidebarTrigger className="-ml-1" />
                        <h1 className="text-[#222222] font-poppins font-semibold text-3xl leading-8 tracking-[0%] mt-4">Trainer  onboarding</h1>
                    </div>


                    {/* Right section → Notification + Country + Profile */}
                    <div className="flex items-center gap-6 pr-8 mt-4">
                        <div className="shadow-md rounded-xl size-13 p-2 cursor-pointer hover:shadow-md transition-shadow">
                            <button className="relative">
                                {/* Notification Icon */}
                                <IoMdNotifications className="text-3xl text-[#4880FF] transition" />
                                <span className="absolute -top-1 -right-1 flex items-center justify-center 
                                h-4 w-4 rounded-full bg-red-500 text-white text-xs font-bold ">4</span>
                            </button>
                        </div>

                        {/* Profile */}
                        <Popover>
                            <PopoverTrigger>
                                <div className="rounded-2xl flex justify-between items-center px-4 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={profileImage}
                                        alt="admin image"
                                      
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold ">Evie Wilson</h2>
                                    </div>
                                    <IoIosArrowDropdown className="text-2xl text-muted-foreground ml-2" />
                                </div>
                            </PopoverTrigger>
                            <PopoverContent>
                                {/* <ProfileCard /> */}
                            </PopoverContent>
                        </Popover>
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-[#FFFFFF] overflow-y-auto">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
