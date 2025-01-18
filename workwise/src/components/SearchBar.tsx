'use client';
import React from 'react';

// SearchBar Component
const SearchBar = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
  <input
    type="text"
    placeholder="Search vendors by name or industry..."
    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;
