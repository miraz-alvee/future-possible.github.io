"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import { ScrollArea } from '../ui/scroll-area';
import { ScrollArea } from '@/components/ui/scroll-area';


const engagementData = [
  { day: 'Sun', value: 15 },
  { day: 'Mon', value: 52 },
  { day: 'Tue', value: 35 },
  { day: 'Wed', value: 68 },
  { day: 'Thu', value: 55 },
  { day: 'Fri', value: 75 },
  { day: 'Sat', value: 72 },
];

const dropoutData = [
  { name: 'Englisg', value: 58, color: '#682ECC' },
  { name: 'French', value: 21, color: '#431A88' },
  { name: 'German', value: 25, color: '#764DB9' },
  { name: 'Spanis', value: 25, color: '#B090E6' },
];

const riskStudents = [
  { course: 'Data Science Bootcamp - Fall 2024', students: 45, riskLevel: 78, status: 'Active' },
  { course: 'Web Development Intensive', students: 45, riskLevel: 57, status: 'Active' },
];


export default function ChartGraphComponentPage() {
  return (
     <div className="flex gap-10 p-6">
        <Card className="w-[725px] h-[410px] bg-white shadow-lg border-0">
          <CardHeader className="">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
               Language Distribution
              </CardTitle>
              <Select defaultValue="weekly">
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between gap-10">
              <div className="h-52">
                <div className="relative">
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie
                        data={dropoutData}
                        cx={100}
                        cy={100}
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={10}
                        dataKey="value"
                      >
                        {dropoutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} className='shadow-[#682ECC5C] rounded-b-3xl' />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center py-5">
                    <div className="bg-[#FFFFFF] shadow-2xl rounded-full px-1 py-5 ml-3 mt-2">
                      <span className="text-xl font-bold text-gray-900 p-2">58%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 p-5'>
                <ScrollArea className="w-[300px] hr-none">
                  {dropoutData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-1 border-l-0 border-r-0 border-[#F3EFF9]">
                      <div className="flex items-center gap-3">

                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600">{item.name}</span>
                      </div>

                      <div className="text-right">
                        <span className="text-xl font-semibold text-gray-900">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Satisfaction Trends */}
         <Card className="w-[800px] h-[410px] bg-[#FFFFFF] shadow-md border-0">
          <CardHeader className="p-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Course Progress Tracking
              </CardTitle>
              <Select defaultValue="weekly">
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementData}>
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 16, fill: '#8D5BE3' }}
                    className="bg-gradient-to-t from-[#E1CFFF] to-[#e4b1b1]"
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                    domain={[0, 100]}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', strokeWidth: 0, r: 4 }}
                    activeDot={{ r: 6, fill: '#8B5CF6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      
      </div>
  )
}
