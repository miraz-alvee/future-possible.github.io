"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

// import iamge from "../../../../public/"

export const description = "An area chart with axes"

const engagementData = [
  { day: 'Sun', value: 15 },
  { day: 'Mon', value: 52 },
  { day: 'Tue', value: 35 },
  { day: 'Wed', value: 68 },
  { day: 'Thu', value: 55 },
  { day: 'Fri', value: 75 },
  { day: 'Sat', value: 72 },
];

// Sample data for dropout risk pie chart
const dropoutData = [
  { name: 'Low Risk', value: 58, color: '#682ECC' },
  { name: 'Medium Risk', value: 22, color: '#431A88' },
  { name: 'High Risk', value: 15, color: '#764DB9' },
];

const activityData = [
  { name: "Sarah Johnson", time: "2 hours ago", action: "Completed Module", count: "03", img: "/trainee-01.png" },
  { name: "Mike Chen", time: "2 hours ago", action: "Completed Assignment", count: "05", img: "/trainee-02.png" },
  { name: "Emma Davis", time: "1 day ago", action: "Submitted Project", count: "01", img: "/trainee-03.png" },
  { name: "Lisa Park", time: "4 hours ago", action: "Completed Quiz", count: "07", img: "/trainee-04.png" },
];

const riskStudents = [
  { course: 'Data Science Bootcamp - Fall 2024', students: 45, riskLevel: 78, status: 'Active' },
  { course: 'Web Development Intensive', students: 45, riskLevel: 57, status: 'Active' },
];

export default function TraineeDashboard() {
  return (
    <>
      <hr className="border-[#ECE8F2] mt-6 opacity-35" />
      <div className="space-y-6">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#FFFFFF] w-sm h-[126px] shadow-base border-0">
            <CardContent className="mr-20">
              <div className="flex justify-evenly items-center gap-10">
                <div className="w-[80px] h-[80px] bg-[#D4CBE4] rounded-3xl flex items-center justify-center">
                  <Users className="w-11 h-11 text-[#431A88]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1247</p>
                  <p className="text-sm text-gray-600 mt-1">Active Students</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#FFFFFF] w-sm h-[126px] shadow-base border-0">
            <CardContent className="mr-20">
              <div className="flex justify-evenly items-center gap-10">
                <div className="w-[80px] h-[80px] bg-[#D4CBE4] rounded-3xl flex items-center justify-center">
                  <TrendingUp className="w-11 h-11 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">78.5%</p>
                  <p className="text-sm text-gray-600 mt-1">Avg Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#FFFFFF] w-sm h-[126px] shadow-base border-0">
            <CardContent className="mr-20">
              <div className="flex justify-evenly items-center gap-10">
                <div className="w-[80px] h-[80px] bg-[#D4CBE4] rounded-3xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-sm text-gray-600 mt-1">Drop Alerts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#FFFFFF] w-sm h-[126px] shadow-base border-0">
            <CardContent className="">
              <div className="flex justify-evenly items-center gap-10">
                <div className="w-[80px] h-[80px] bg-[#D4CBE4] rounded-3xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">8.4/10</p>
                  <p className="text-sm text-gray-600 mt-1">Engagement Score</p>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* chart and table */}
      <div className="flex gap-6 p-6">
        <Card className="w-[940px] h-[410px] bg-[#FFFFFF] shadow-xl border-0">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Student Engagement & Completion
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

        {/* Activity Table Section */}
        <Card className="w-[590px] h-[410px] bg-[#FFFFFF] shadow-xl border-0">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] hr-none">
              {activityData.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-1 border-l-0 border-r-0 border-[#F3EFF9]">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <Image
                        alt='student trainee image'
                        src={item.img}
                        width={200}
                        height={200}
                        className='w-[50px] h-[50px] object-cover rounded-full'
                      />
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{item.action}</p>
                    <p className="font-bold">{item.count}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-6 p-6">
        <Card className="w-[810px] h-[330px] bg-white shadow-xl border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900">Risk Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskStudents.map((course, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{course.course}</h3>
                      <p className="text-sm text-gray-600">{course.students} Students</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                      {course.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Risk Level</span>
                      <span className="font-medium text-purple-600">{course.riskLevel}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.riskLevel}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dropout Risk Analysis */}
        <Card className="w-[710px] h-[330px] bg-white shadow-xl border-0">
          <CardHeader className="">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Dropout Risk Analysis
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
                        innerRadius={60}
                        outerRadius={85}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {dropoutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
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
              <div className='mt-5 px-5'>
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
      </div>
    </>
  )
}
