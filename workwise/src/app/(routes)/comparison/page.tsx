'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar'; // Import the Navbar component
import SearchBar from '@/components/SearchBar'; // Import the SearchBar component

export default function ComparisonPage() {
  const [searchValue, setSearchValue] = useState(''); // State to manage the search input
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedRFQ, setSelectedRFQ] = useState<any>(null); // State for selected RFQ

  // Handler to update the search input value
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  // Sample RFQ data
  const rfqData = [
    { rfqNumber: 'RFQ-2024-001', products: 'Industrial Pumps, Valves' },
    { rfqNumber: 'RFQ-2024-002', products: 'Electric Motors' },
    { rfqNumber: 'RFQ-2024-003', products: 'Control Systems' },
  ];

  // Open the modal with the selected RFQ data
  const openModal = (rfq: any) => {
    setSelectedRFQ(rfq);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRFQ(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Integrate Navbar */}
      <Navbar />

      <div className="container mx-auto p-4 pt-20">
        {/* Heading - "Received Quotes Comparison" */}
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Received Quotes Comparison</h1>

        {/* Search Bar */}
        <SearchBar value={searchValue} onChange={handleSearchChange} />

        {/* Table for RFQ data */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Serial Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">RFQ Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Products</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Excel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Mark Close</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {rfqData.map((rfq, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => openModal(rfq)} // Open modal with selected RFQ
                    >
                      {rfq.rfqNumber}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{rfq.products}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                      Excel
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                      Close
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for RFQ Details */}
      {isModalOpen && selectedRFQ && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-11/12 max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
            >
              Close
            </button>
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{selectedRFQ.rfqNumber}</h2>
            </div>

            {/* RFQ Details Table */}
            <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">S.No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Variants</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Purchase Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Company 1</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Company 2</th>
                </tr>
              </thead>
              <tbody>
                {/* Row for Product A */}
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">1</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Product A</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Variant 1</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">100</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Details</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Price</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Price</td>
                </tr>

                {/* Row for Product B */}
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">2</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Product B</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Variant 1</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">150</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Details</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Price</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Price</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
