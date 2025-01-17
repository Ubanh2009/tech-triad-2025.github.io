'use client';
import React, { useState } from 'react';
import { Menu, User, X } from 'lucide-react';
import { MOCK_VENDORS, Vendor } from '@/lib/mockData';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Search Vendor', active: true },
    { name: 'RFQ Management' },
    { name: 'Technical Evaluation' },
    { name: 'Compare received quotes' },
  ];

  const dropdownLinks = [
    { name: 'My Account', active: true },
    { name: 'Edit Profile' },
    { name: 'Vendor Management' },
    { name: 'Project Management' },
    { name: 'Change Password' },
    { name: 'Logout' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-100 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/api/placeholder/180/60" alt="Logo" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`text-sm font-medium ${
                  link.active ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden md:block relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200"
            >
              <User className="h-6 w-6 text-gray-700" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {dropdownLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block px-4 py-2 text-sm ${
                      link.active ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    link.active ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <hr className="my-2 border-gray-200" />
              {dropdownLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    link.active ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Filter Modal Component
const FilterModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filter Vendors</h2>
          <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Organization Dropdown */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
              Organization
            </label>
            <select
              id="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Organization</option>
              {Certified.map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-md">
            Cancel
          </button>
          <button onClick={applyFilters} className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function FindVendorPage() {
  const [vendors, setVendors] = useState<Vendor[]>(MOCK_VENDORS);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [filters, setFilters] = useState({ industry: '', organization: '' });

  const filteredVendors = vendors.filter(
    (vendor) =>
      (vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.industry.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!filters.industry || vendor.industry.toLowerCase().includes(filters.industry.toLowerCase())) &&
      (!filters.organization || vendor.name.toLowerCase().includes(filters.organization.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 pt-20">
        <h1 className="text-3xl font-bold mb-6">Find Vendor</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No vendors found matching your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
