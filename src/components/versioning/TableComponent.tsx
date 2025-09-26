"use client"
import React, { useState } from 'react'
import { Search, Filter, Plus, Edit, Trash2 } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Sample JSON data
const tableData = [
    {
        id: 1,
        name: "Data Science Intensive",
        date: "Aug 08, 2025",
        status: "Active",
        engagement : "85.2%",
        satisfaction: "3.2/5"
    },
    {
        id: 2,
        name: "Data Science Intensive",
        date: "Aug 08, 2025",
        status: "Active",
        engagement : "85.2%",
        satisfaction: "3.2/5"
    },
    {
        id: 3,
       name: "Data Science Intensive",
        date: "Aug 08, 2025",
        status: "Active",
        engagement : "85.2%",
        satisfaction: "3.2/5"
    },
    {
        id: 4,
        name: "Data Science Intensive",
        date: "Aug 08, 2025",
        status: "Active",
        engagement : "85.2%",
        satisfaction: "3.2/5"
    },
    {
        id: 5,
        name: "Data Science Intensive",
        date: "Aug 08, 2025",
        status: "Active",
        engagement : "85.2%",
        satisfaction: "3.2/5"
    },
    {
        id: 6,
      name: "Data Science Intensive",
        date: "Aug 08, 2025",
        status: "Active",
        engagement : "85.2%",
        satisfaction: "3.2/5"
    },
    {
        id: 7,
        name: "Data Science Intensive",
        date: "Aug 08, 2025",
        status: "Active",
        engagement : "85.2%",
        satisfaction: "3.2/5"
    },
    {
        id: 8,
        name: "Data Science Intensive",
        date: "Aug 08, 2025",
        status: "Active",
        engagement : "85.2%",
        satisfaction: "3.2/5"
    }
]

export default function TableComponentPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [cohorts, setCohorts] = useState(tableData)

    const filteredCohorts = cohorts.filter(cohort =>
        cohort.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const StatusBadge = ({ status }) => (
        <span
            className={`px-4 py-1 rounded-full text-sm font-medium ${status === 'Complete'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700'
                }`}
        >
            {status}
        </span>
    )

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Search and Filter Bar */}
            <div className="flex items-center justify-between mt-8">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-90 h-13 rounded-2xl shadow-[rgba(216, 207, 230, 0.16)] border-gray-200"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="outline" className="flex items-center gap-2 w-32 h-13 rounded-2xl shadow-[rgba(216, 207, 230, 0.16)] border-gray-200 ">
                        <Filter className="h-4 w-4" />
                        Filter
                    </Button>
                    {/* /rgba(104, 46, 204, 1) */}
                    <Button variant="outline" className="flex items-center gap-2 w-48  h-13 rounded-2xl shadow-[rgba(216, 207, 230, 0.16)] border-[#682ECC] font-semibold text-[18px]">
                        <Plus className="h-4 w-4" />
                        Add Cohort
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div>
                <table className="w-full space-y-7 border-separate border-spacing-5">
                    <thead>
                        <tr>
                            <th className="text-left text-gray-600 font-medium py-4 px-6 text-sm">Name</th>
                            <th className="text-left text-gray-600 font-medium py-4 px-6 text-sm">Date</th>
                            <th className="text-left text-gray-600 font-medium py-4 px-6 text-sm">Status</th>
                            <th className="text-left text-gray-600 font-medium py-4 px-6 text-sm">Engagement</th>
                            <th className="text-left text-gray-600 font-medium py-4 px-6 text-sm">satisfaction</th>
                            <th className="text-right text-gray-600 font-medium py-4 px-6 text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCohorts.map((cohort) => (
                            <tr
                                key={cohort.id}
                                className='shadow-[2px_3px_28px_0px_rgba(216,207,230,0.26)] rounded-xl'>
                                <td className="font-medium text-gray-900 py-4 px-6">
                                    {cohort.name}
                                </td>
                                <td className="text-gray-600 py-4 px-6">
                                    {cohort.date}
                                </td>
                                <td className="text-gray-900 font-medium py-4 px-6">
                                     <StatusBadge status={cohort.status} />
                                    
                                </td>
                                {/* <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-purple-600 min-w-[35px]">
                                            {cohort.engagement}
                                        </span>
                                        <div className="w-full bg-gray-200 rounded-full h-2 max-w-[120px]">
                                            <div
                                                className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${cohort.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </td> */}
                                <td className="py-4 px-6">
                                     {cohort.engagement}
                                </td>
                                <td className=" py-4 px-6">
                                    {cohort.satisfaction}
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button className="h-8 w-8 p-0 bg-[#FFFFFF] hover:bg-gray-100">
                                            <Edit className="h-30 w-30 text-gray-500" />  {/* Increase icon size here */}
                                        </Button>
                                        <Button className="h-8 w-8 p-0 bg-[#FFFFFF] hover:bg-gray-100">
                                            <Trash2 className="h-10 w-10 text-gray-500" />  {/* Increase icon size here */}
                                        </Button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}