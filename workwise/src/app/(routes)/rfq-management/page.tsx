'use client';
import React, { useState } from 'react';
import { Menu, User, Eye, Bell, Filter } from 'lucide-react';
import Link from 'next/link';
// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Search Vendor', href: '/find-vendor' },
    { name: 'Magic Search', href: '/magic-search' },
    { name: 'RFQ Management', href: '/rfq-management',active: true},
    { name: 'RFQ Creation', href: '/create-rfq' },
    { name: 'Technical Evaluation', href: '#' },
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


const RFQManagementPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    rfqNumber: '',
    rfqType: '',
    reverseAuction: '',
    projectId: '',
    sort: 'DESC'
  });

  // Sample RFQ data
  const rfqData = [
    {
      rfqNumber: 'RFQ-2024-001',
      products: 'Industrial Pumps, Valves',
      publishDate: '2024-01-15',
      endDate: '2024-02-15',
      status: 'Active',
      rfqType: 'Firm'
    },
    {
      rfqNumber: 'RFQ-2024-002',
      products: 'Electric Motors',
      publishDate: '2024-01-18',
      endDate: '2024-02-18',
      status: 'Draft',
      rfqType: 'Budgetary'
    },
    {
      rfqNumber: 'RFQ-2024-003',
      products: 'Control Systems',
      publishDate: '2024-01-20',
      endDate: '2024-02-20',
      status: 'Closed',
      rfqType: 'Firm'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'closed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Integrate Navbar */}
      <Navbar />

      {/* Main Content with New Layout */}
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row mt-8 gap-6">
            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden flex items-center justify-center w-full p-2 bg-white dark:bg-gray-800 rounded-lg shadow mb-4"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            {/* Filters Sidebar */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 space-y-6`}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Filters
                </h3>

                {/* RFQ Number Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Search RFQ No.
                  </label>
                  <input
                    type="text"
                    placeholder="Ex. 123456"
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    value={filters.rfqNumber}
                    onChange={(e) => setFilters({ ...filters, rfqNumber: e.target.value })}
                  />
                </div>

                {/* RFQ Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    RFQ Type
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    value={filters.rfqType}
                    onChange={(e) => setFilters({ ...filters, rfqType: e.target.value })}
                  >
                    <option value="">All Types</option>
                    <option value="budgetary">Budgetary</option>
                    <option value="firm">Firm</option>
                  </select>
                </div>

                {/* Reverse Auction Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Reverse Auction
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    value={filters.reverseAuction}
                    onChange={(e) => setFilters({ ...filters, reverseAuction: e.target.value })}
                  >
                    <option value="">All</option>
                    <option value="1">Enabled</option>
                    <option value="0">Disabled</option>
                  </select>
                </div>

                {/* Project Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Select Project
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    value={filters.projectId}
                    onChange={(e) => setFilters({ ...filters, projectId: e.target.value })}
                  >
                    <option value="">All Projects</option>
                    <option value="1">Project A</option>
                    <option value="2">Project B</option>
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Sort By
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    value={filters.sort}
                    onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                  >
                    <option value="DESC">Latest to Oldest</option>
                    <option value="ASC">Oldest to Latest</option>
                  </select>
                </div>

                {/* Apply Filters Button */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Table Section */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          RFQ Number
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Products
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Timeline
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          RFQ Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {rfqData.map((rfq, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {rfq.rfqNumber}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                            {rfq.products}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                            <div>Publish: {rfq.publishDate}</div>
                            <div>End: {rfq.endDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(rfq.status)}`}>
                              {rfq.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                            {rfq.rfqType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </button>
                            <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                              <Bell className="h-4 w-4 mr-1" />
                              Send Reminder
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RFQManagementPage;
