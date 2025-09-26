import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import headerImage from "../../../public/dashboard-img.png"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/trainee-dashboard",
    icon: Home,
  },
  {
    title: "Management",
    url: "/management",
    icon: Inbox,
  },
  {
    title: "Sequence Planning",
    url: "/sequence-planning",
    icon: Calendar,
  },
  {
    title: "Sequence Library",
    url: "/sequence-library",
    icon: Search,
  },
  {
    title: "AI Configaration",
    url: "ai-configaration",
    icon: Settings,
  },
  {
    title: "Versioning",
    url: "/versioning",
    icon: Search,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: Search,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-none ">
      <SidebarContent className="bg-[#32106B] rounded-tr-4xl rounded-br-4xl">
        <SidebarGroup>
          <SidebarGroupLabel className="mt-3 mb-3"><Image src={headerImage} alt="Logo" className="mt-10 w-44 h-12" /></SidebarGroupLabel>
          <hr className="border-[#FFFFFF] mt-10 opacity-35 border"/>
          <SidebarGroupContent className="mt-10 ">
            <SidebarMenu className="space-y-5">
              {items.map((item) => ( 
                <SidebarMenuItem key={item.title} className="text-[#BDAFD5] ">
                  <SidebarMenuButton asChild className="bg-[#32106B] hover:bg-[#682ECC] hover:text-white px-10 py-3">
                    <a href={item.url} >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}