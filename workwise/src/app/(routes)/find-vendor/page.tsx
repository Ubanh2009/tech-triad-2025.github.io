// src/app/(routes)/find-vendor/page.tsx
'use client'
import { useState } from 'react'
import { MOCK_VENDORS, Vendor } from '@/lib/mockData'

export default function FindVendorPage() {
  const [vendors, setVendors] = useState<Vendor[]>(MOCK_VENDORS)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredVendors = vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.industry.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Find Vendor</h1>
      
      <input 
        type="text"
        placeholder="Search vendors..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-4">
        {filteredVendors.map(vendor => (
          <div key={vendor.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{vendor.name}</h2>
            <p className="text-gray-600">{vendor.industry}</p>
            <div className="mt-2">
              <span className="font-bold">Rating: {vendor.rating}/5</span>
              <div className="mt-2">
                <strong>Specialties:</strong>
                <ul className="list-disc list-inside">
                  {vendor.specialties.map(specialty => (
                    <li key={specialty}>{specialty}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}