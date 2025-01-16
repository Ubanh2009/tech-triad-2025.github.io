// src/app/(routes)/rfq-management/page.tsx
'use client'
import { useState } from 'react'
import { MOCK_RFQS, RFQ } from '@/lib/mockData'

export default function RFQManagementPage() {
  const [rfqs, setRFQs] = useState<RFQ[]>(MOCK_RFQS)
  const [filter, setFilter] = useState<RFQ['status'] | 'All'>('All')

  const filteredRFQs = filter === 'All' 
    ? rfqs 
    : rfqs.filter(rfq => rfq.status === filter)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">RFQ Management</h1>
      
      <div className="mb-4">
        <label className="mr-2">Filter by Status:</label>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value as RFQ['status'] | 'All')}
          className="p-2 border rounded"
        >
          <option value="All">All RFQs</option>
          <option value="Draft">Draft</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Awarded">Awarded</option>
        </select>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Created At</th>
            <th className="p-3 text-left">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {filteredRFQs.map(rfq => (
            <tr key={rfq.id} className="border-b">
              <td className="p-3">{rfq.id}</td>
              <td className="p-3">{rfq.title}</td>
              <td className="p-3">
                <span className={`
                  px-2 py-1 rounded 
                  ${rfq.status === 'Open' ? 'bg-green-200' : 
                    rfq.status === 'Draft' ? 'bg-yellow-200' : 
                    rfq.status === 'Closed' ? 'bg-red-200' : 'bg-blue-200'}
                `}>
                  {rfq.status}
                </span>
              </td>
              <td className="p-3">{rfq.createdAt.toLocaleDateString()}</td>
              <td className="p-3">{rfq.deadline.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}