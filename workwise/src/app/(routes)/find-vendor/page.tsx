'use client';
import React, { useState, useEffect } from 'react';
import { Menu, User, X } from 'lucide-react';
import { MOCK_VENDORS, Vendor } from '@/lib/mockData'; // Retained mock data import
import Link from 'next/link'; // Use Link component for routing

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Search Vendor', href: '/find-vendor', active: true },
    { name: 'Magic Search', href: '/magic-search' },
    { name: 'RFQ Management', href: '/rfq-management' },
    { name: 'Technical Evaluation', href: '/technical-evaluation' },
    { name: 'Compare received quotes', href: '/comparison' },
  ];

  const dropdownLinks = [
    { name: 'My Account', href: '/account', active: true },
    { name: 'Edit Profile', href: '/edit-profile' },
    { name: 'Vendor Management', href: '/vendor-management' },
    { name: 'Project Management', href: '/project-management' },
    { name: 'Change Password', href: '/change-password' },
    { name: 'Logout', href: '/logout' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="logo.jpeg" alt="Logo" width="180" height="60" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <span
                  className={`text-sm font-medium ${
                    link.active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden md:block relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <User className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                {dropdownLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <span
                      className={`block px-4 py-2 text-sm ${
                        link.active
                          ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-900'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      link.active
                        ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-900'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <hr className="my-2 border-gray-200" />
              {dropdownLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      link.active
                        ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-900'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Search Bar Component
const SearchBar = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
  <input
    type="text"
    placeholder="Search vendors by name or industry..."
    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

// VendorCard Component
const VendorCard = ({ vendor, onClick }: { vendor: Vendor; onClick: () => void }) => (
  <div
    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105"
    onClick={onClick}
  >
    <h2 className="text-xl font-semibold font-montserrat text-frost-white dark:text-frost-white">{vendor.name}</h2>
    <p className="text-gray-600 dark:text-gray-300">{vendor.industry}</p>
    <div className="mt-2">
      <span className="font-bold">Rating: {vendor.rating}/5</span>
      <div className="mt-2">
        <strong>Specialties:</strong>
        <ul className="list-disc list-inside">
          {vendor.specialties.map((specialty) => (
            <li key={specialty} className="text-gray-700 dark:text-gray-300">{specialty}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Vendor Details Modal
const VendorDetailsModal = ({
  vendor,
  isOpen,
  onClose,
}: {
  vendor: Vendor;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-semibold font-montserrat text-frost-white dark:text-frost-white">{vendor.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">Industry: {vendor.industry}</p>
        <p className="text-gray-600 dark:text-gray-300">Rating: {vendor.rating}/5</p>
        <p className="mt-4">{vendor.description}</p>
        <div className="mt-4">
          <strong>Contact:</strong>
          <p>{vendor.contactInfo}</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md">Add to RFQ</button>
      </div>
    </div>
  );
};

// Filter Modal Component
const FilterModal = ({
  isOpen,
  onClose,
  onApplyFilters,
}: {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: { industry: string; organization: string }) => void;
}) => {
  const [industry, setIndustry] = useState('');
  const [organization, setOrganization] = useState('');

  const industries = ['Technology', 'Manufacturing', 'Consulting', 'Healthcare', 'Education'];
  const organizations = [
    'IOCL', 'EIL', 'ONGC', 'HPCL', 'SAIL', 'NTPC', 'PDIL', 'NALCO', 'BHEL', 'MRPL', 'BPCL', 'GAIL',
    'OIL', 'NHPC', 'CET', 'CIL', 'PGCI', 'NPCIL', 'BPIL', 'IGGL', 'VEDANTA'
  ];

  const applyFilters = () => {
    onApplyFilters({ industry, organization });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold font-montserrat text-gray-900 dark:text-gray-100">Filter Vendors</h2>
          <button onClick={onClose} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Industry
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">Select Industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Organization
            </label>
            <select
              id="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">Select Organization</option>
              {organizations.map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md">
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
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const [filters, setFilters] = useState<{ industry: string; organization: string }>({
    industry: '',
    organization: '',
  });

  const filteredVendors = vendors.filter(
    (vendor) =>
      (vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.industry.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!filters.industry || vendor.industry.toLowerCase().includes(filters.industry.toLowerCase())) &&
      (!filters.organization || vendor.name.toLowerCase().includes(filters.organization.toLowerCase()))
  );

  const handleCloseModal = () => {
    setSelectedVendor(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-4 pt-20">
        <h1 className="text-3xl font-bold mb-6 font-montserrat animate-float text-frost-white dark:text-frost-white">
          Find Vendor
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md"
          >
            Filters
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              onClick={() => setSelectedVendor(vendor)}
            />
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-300">No vendors found matching your search criteria</p>
          </div>
        )}

        {selectedVendor && (
          <VendorDetailsModal
            vendor={selectedVendor}
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={setFilters}
      />
    </div>
  );
}
