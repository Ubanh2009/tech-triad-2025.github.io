'use client';
import React, { useState } from 'react';
import { Menu, User, Eye, Bell } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Search Vendor', href: '/find-vendor' },
    { name: 'Magic Search', href: '/magic-search' },
    { name: 'RFQ Management', href: '/rfq-management',},
    { name: 'RFQ Creation', href: '/create-rfq',},
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

export default Navbar;
