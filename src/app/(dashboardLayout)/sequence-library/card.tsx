"use client";
import React from "react";
import Image from "next/image";
import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PiShareFat } from "react-icons/pi";
import { RxCopy } from "react-icons/rx";

export interface CardProps {
  id: number;
  date: string;
  users: number;
  title: string;
  description: string;
  level: string;
  image: string;
}

const Card: React.FC<{ item: CardProps }> = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition w-[370px] h-[500px] ">
      {/* Image Section: Full Width, Fixed Height */}
      <div className="relative w-full h-[240px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover mt-2"
        />
        <span className="absolute top-8 right-12 bg-[#CEC4DF4D] border border-[#CAB7EB] backdrop-blur-xs text-[#FDFEFE]
          text-xs px-4 py-3 rounded-full">
          {item.level}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-5">
        <div className="flex text-gray-500 text-sm items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} /> {item.date}
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} /> {item.users} Users
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{item.description}</p>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          <Button className="bg-[#FFFFFF] font-semibold text-xl border border-[#682ECC] text-[#682ECC] rounded-2xl px-12 py-7 hover:bg-purple-50">
            Import
          </Button>
          <div className="flex gap-4">
             <div className="bg-[#FFFFFF] border-[#EDE9F4] shadow-sm backdrop-blur-lg rounded-2xl px-2 py-2 ">
              <Button  className="bg-white border-0 text-[#3C3941] hover:bg-white cursor-pointer">
                 <RxCopy  size={20} />
              </Button>
            </div>
           
            <div className="bg-[#FFFFFF] border-[#EDE9F4] shadow-sm backdrop-blur-lg rounded-2xl px-2 py-2 ">
              <Button  className="bg-white border-0 text-[#3C3941] hover:bg-white cursor-pointer">
                 <PiShareFat size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
