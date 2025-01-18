'use client';
import React, { useState } from 'react';
import { Trash, Plus, File } from 'lucide-react';

const RFQCreationPage = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [productDetails, setProductDetails] = useState({
    name: 'VALVE',
    specifications: '',
    size: '',
    quantity: '',
    unit: '',
    comments: ''
  });

  const suggestedTerms = [
    "Manufacturing Clearance: All items shall be manufactured after providing you with manufacturing clearance",
    "Inspection: Materials will be Inspected at your works by approved Third Party Inspection Agency (TPIA) as per Approved QAP only.",
    // Add other terms here
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-gray-50 shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <img src="/api/placeholder/180/60" alt="Logo" className="h-15 w-45" />
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Search Vendor</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">RFQ Management</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Technical Evaluation</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Compare received quotes</a>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-4 mb-8">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
              Manage Group RFQ
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Create RFQs
            </button>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2">Select Project</h4>
            <select 
              className="w-72 p-2 border rounded"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option value="">Select</option>
            </select>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Review Products</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left border">Name of product</th>
                    <th className="p-4 text-left border">Size & specifications</th>
                    <th className="p-4 text-left border">Quantity</th>
                    <th className="p-4 text-left border">Technical Datasheet (TDS)</th>
                    <th className="p-4 text-left border">Quality Assurance Plan(QAP)</th>
                    <th className="p-4 text-left border">Product Comments</th>
                    <th className="p-4 text-left border">Selected vendors</th>
                    <th className="p-4 text-left border">Action</th>
                    <th className="p-4 text-left border">Technical Evaluation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border">{productDetails.name}</td>
                    <td className="p-4 border">
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Grade, Material and other Specs"
                          className="w-full p-2 border rounded"
                        />
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            placeholder="Size"
                            className="w-full p-2 border rounded"
                          />
                          <span>OR</span>
                          <button className="flex items-center space-x-2 px-4 py-2 border rounded">
                            <File className="w-4 h-4" />
                            <span>Upload</span>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border">
                      {/* Add quantity inputs */}
                    </td>
                    <td className="p-4 border">
                      {/* Add TDS upload */}
                    </td>
                    <td className="p-4 border">
                      {/* Add QAP upload */}
                    </td>
                    <td className="p-4 border">
                      <input
                        type="text"
                        placeholder="Add Comments..."
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="p-4 border">
                      <a href="#" className="text-blue-500 hover:underline">
                        View selected vendors (1)
                      </a>
                    </td>
                    <td className="p-4 border">
                      <div className="space-y-2">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded">
                          <Trash className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded">
                          <Plus className="w-4 h-4" />
                          <span>Add variant</span>
                        </button>
                      </div>
                    </td>
                    <td className="p-4 border">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded">
                        <Plus className="w-4 h-4" />
                        <span>Add Clauses</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-right mb-8">
            <a href="/vendor/all" className="text-blue-500 hover:underline">
              Add More Products
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Suggested Terms</h4>
              <ol className="list-decimal pl-6 space-y-4">
                {suggestedTerms.map((term, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" defaultChecked />
                    <span>{term}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2">Add your own terms (Optional)</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows={5}
                    placeholder="You can mention your terms regarding Freight Charges, Payment Terms..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded"
                      placeholder="Enter Email"
                      defaultValue="dhruvsaxena220904@gmail.com"
                    />
                  </div>
                  {/* Add other form fields */}
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="px-6 py-2 bg-gray-500 text-white rounded">
                    Create RFQ
                  </button>
                  <button type="button" className="px-6 py-2 bg-gray-500 text-white rounded">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RFQCreationPage;

