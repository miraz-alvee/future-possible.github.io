import ChartComponentPage from '@/components/versioning/ChartComponent'
import TableComponentPage from '@/components/versioning/TableComponent'
import React from 'react'

export default function VersioningPage() {
  return (
    <div>
        <hr className="border-[#ECE8F2] mt-6 opacity-35" />
        <ChartComponentPage></ChartComponentPage>
        <TableComponentPage></TableComponentPage>

    </div>
  )
}
