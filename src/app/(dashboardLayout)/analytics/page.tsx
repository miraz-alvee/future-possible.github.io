import BarChartComponent from '@/components/analytics/BarChartComponent'
import ChartGraphComponentPage from '@/components/analytics/ChartGraphComponent'
import React from 'react'

export default function AnalyticsPage() {
  return (
    <div>
        <hr className="border-[#ECE8F2] mt-6 opacity-35" />
        <BarChartComponent></BarChartComponent>
        <ChartGraphComponentPage></ChartGraphComponentPage>
    </div>
  )
}
