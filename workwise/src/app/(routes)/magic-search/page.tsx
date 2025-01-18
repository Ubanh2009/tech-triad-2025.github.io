'use client';
import React, { useState } from 'react';
import { Menu, User } from 'lucide-react';

const Page = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Navbar links
  const navLinks = [
    { name: 'Search Vendor', href: '/find-vendor',},
    { name: 'Magic Search', href: '/magic-search', active: true },
    { name: 'RFQ Management', href: '/rfq-management' },
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

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    const dropBox = document.getElementById("dropBox");
    if (dropBox) dropBox.classList.add("hover");
  };

  const handleDragLeave = () => {
    const dropBox = document.getElementById("dropBox");
    if (dropBox) dropBox.classList.remove("hover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropBox = document.getElementById("dropBox");
    if (dropBox) dropBox.classList.remove("hover");

    const files = e.dataTransfer.files;
    const fileArray = Array.from(files);
    setFileList(fileArray);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
            <a className="text-2xl font-bold">WorkWise&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="no-underline">
                  <span
                    className={`text-sm font-medium ${
                      link.active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
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
                    <a key={index} href={link.href} className="no-underline">
                      <span
                        className={`block px-4 py-2 text-sm ${
                          link.active
                            ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-900'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {link.name}
                      </span>
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
                  <a key={index} href={link.href} className="no-underline">
                    <span
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        link.active
                          ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-900'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                ))}
                <hr className="my-2 border-gray-200 dark:border-gray-700" />
                {dropdownLinks.map((link, index) => (
                  <a key={index} href={link.href} className="no-underline">
                    <span
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        link.active
                          ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-900'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20">
        <div className="header text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">MAGIC SEARCH</h1>
        </div>

        <div className="content max-w-2xl mx-auto">
          {/* Procedure Box */}
          <div className="procedure-box bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Step 1:</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Download, fill and upload the BOQ file for smooth RFQ Creation</p>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Step 2:</h2>
            <p className="text-gray-700 dark:text-gray-300">Upload Your File and other details.</p>
          </div>

          {/* Drag and Drop Box */}
          <div
            id="dropBox"
            className="drop-box border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <p className="text-gray-600 dark:text-gray-400">Drag & Drop Files Here</p>
          </div>

          {/* File List */}
          <ul className="file-list mt-4 space-y-2">
            {fileList.map((file, index) => (
              <li 
                key={index}
                className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-2 rounded"
              >
                {file.name}
              </li>
            ))}
          </ul>

          {/* Generate Button */}
          <button className="generate-btn w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Generate BOQ
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;