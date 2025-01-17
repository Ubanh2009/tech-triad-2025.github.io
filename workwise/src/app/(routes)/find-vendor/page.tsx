'use client'
import React, { useState } from 'react';
import { Menu, User } from 'lucide-react';
import { MOCK_VENDORS, Vendor } from '@/lib/mockData';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Search Vendor', active: true },
    { name: 'RFQ Management' },
    { name: 'Technical Evaluation' },
    { name: 'Compare received quotes' }
  ];

  const dropdownLinks = [
    { name: 'My Account', active: true },
    { name: 'Edit Profile' },
    { name: 'Vendor Management' },
    { name: 'Project Management' },
    { name: 'Change Password' },
    { name: 'Logout' }
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

// VendorCard Component
const VendorCard = ({ vendor }: { vendor: Vendor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{vendor.name}</h2>
      <p className="text-gray-600">{vendor.industry}</p>
      <div className="mt-2">
        <span className="font-bold">Rating: {vendor.rating}/5</span>
        <div className="mt-2">
          <strong>Specialties:</strong>
          <ul className="list-disc list-inside">
            {vendor.specialties.map(specialty => (
              <li key={specialty} className="text-gray-700">{specialty}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Search Component
const SearchBar = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  return (
    <input 
      type="text"
      placeholder="Search vendors by name or industry..."
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

// Main Page Component
export default function FindVendorPage() {
  const [vendors, setVendors] = useState<Vendor[]>(MOCK_VENDORS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVendors = vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 pt-20">
        <h1 className="text-3xl font-bold mb-6">Find Vendor</h1>
        
        <div className="max-w-2xl mb-8">
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map(vendor => (
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