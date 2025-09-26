import React from 'react'
import imageGroup from '../../../../public/Group.png'
import Image from 'next/image'

export default function SequencePlanningPage
    () {
    return (
        <div>
            <hr className="border-[#ECE8F2] mt-6 opacity-35" />
            <div className="flex gap-8 mt-8 ml-5">
                <div className='w-[360px] h-[600px] bg-[#FFFFFF] shadow-sm drop-shadow-[#D8CFE6] rounded-xl'>01</div>
                <div className="w-[1170px] h-[900px] bg-[#F9F9FD] shadow-xl rounded-xl">
                    <Image
                     src={imageGroup}
                        alt="Description of image"
                        className="w-[1110px] h-[750px] object-cover rounded-xl mx-10 mt-32"
                    ></Image>
                   
                </div>

            </div>

        </div>
    )
}
