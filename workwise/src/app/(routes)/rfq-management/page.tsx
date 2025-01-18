import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const ManageRFQ = () => {
  const [filters, setFilters] = useState({
    rfqNumber: '',
    rfqType: '',
    reverseAuction: '',
    projectId: '',
    sort: 'DESC'
  });

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { text: 'Dashboard', isActive: true },
    { text: 'Search Vendor', isActive: false },
    { text: 'RFQ Management', isActive: false },
    { text: 'Technical Evaluation', isActive: false },
    { text: 'Compare received quotes', isActive: false }
  ];

  const dropdownLinks = [
    { text: 'My Account', isActive: true },
    { text: 'Edit Profile', isActive: false },
    { text: 'Vendor Management', isActive: false },
    { text: 'Project Management', isActive: false },
    { text: 'Change Password', isActive: false },
    { text: 'Logout', isActive: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <img src="/api/placeholder/180/60" alt="Logo" className="h-15 w-45" />
              
              {/* Main Navigation Links */}
              <div className="hidden md:flex space-x-6">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`text-gray-700 hover:text-gray-900 ${
                      link.isActive ? 'font-semibold' : ''
                    }`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Dropdown Menu */}
            <div className={`md:block ${isNavOpen ? 'block' : 'hidden'}`}>
              <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4">
                {dropdownLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`block text-gray-700 hover:text-gray-900 ${
                        link.isActive ? 'font-semibold' : ''
                      }`}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            {/* Filters Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                {/* RFQ Number Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Search RFQ No.
                  </label>
                  <input
                    type="text"
                    placeholder="Ex. 123456"
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={filters.rfqNumber}
                    onChange={(e) => setFilters({ ...filters, rfqNumber: e.target.value })}
                  />
                </div>

                {/* Empty Column for spacing */}
                <div className="hidden lg:block"></div>

                {/* RFQ Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RFQ Type
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={filters.rfqType}
                    onChange={(e) => setFilters({ ...filters, rfqType: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option value="budgetary">Budgetary</option>
                    <option value="firm">Firm</option>
                  </select>
                </div>

                {/* Reverse Auction Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reverse Auction
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={filters.reverseAuction}
                    onChange={(e) => setFilters({ ...filters, reverseAuction: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option value="1">Enabled</option>
                    <option value="0">Disabled</option>
                  </select>
                </div>

                {/* Project Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Project
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={filters.projectId}
                    onChange={(e) => setFilters({ ...filters, projectId: e.target.value })}
                  >
                    <option value="">Select</option>
                    {/* Add project options here */}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort By
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={filters.sort}
                    onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                  >
                    <option value="DESC">Latest to Oldest</option>
                    <option value="ASC">Oldest to Latest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mt-8 text-center text-gray-600">
              <p>You haven't created any RFQs yet!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageRFQ;