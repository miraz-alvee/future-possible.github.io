"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Bar, BarChart, CartesianGrid } from 'recharts';
import { TrendingUp } from "lucide-react"


const engagementData = [
    { day: 'Sun', value: 15 },
    { day: 'Mon', value: 52 },
    { day: 'Tue', value: 35 },
    { day: 'Wed', value: 68 },
    { day: 'Thu', value: 55 },
    { day: 'Fri', value: 75 },
    { day: 'Sat', value: 72 },
];

const chartData = [
  { month: "January", desktop: 86},
  { month: "February", desktop: 35},
  { month: "March", desktop: 45 },
  { month: "April", desktop: 73},
  { month: "May", desktop: 90},
  { month: "June", desktop: 51 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#682ECC",
  },
} satisfies ChartConfig


export default function
    () {
    return (
        <div className="flex gap-10 p-6">
            <Card className="w-[940px] h-[410px] bg-[#FFFFFF] shadow-md border-0">
                <CardHeader>
                    <div className="flex items-center justify-between px-5">
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

            <Card className='w-[590px] h-[410px] bg-[#FFFFFF] shadow-md border-0'>
                <CardHeader>
                    <div className="flex items-center justify-between px-3">
                        <CardTitle className="text-lg font-semibold text-gray-900">
                            Quiz Performance
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
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData} barSize={16}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                             <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#545454' }}
                                    domain={[0, 100]}
                                />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dashed" />}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={6}  />
                            {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    )
}
