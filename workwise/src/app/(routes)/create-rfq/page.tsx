'use client';
import React, { useState } from 'react';
import { Trash, Plus, File } from 'lucide-react';
import Navbar from '../../../components/Navbar'; // Import the Navbar component

interface ProductDetails {
  name: string;
  specifications: string;
  size: string;
  quantity: string;
  unit: string;
  comments: string;
}

const RFQCreationPage = () => {
  const [selectedProject, setSelectedProject] = useState<string>(''); // Explicitly typed as string
  const [productDetails, setProductDetails] = useState<ProductDetails>({
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Integrate Navbar */}
      <Navbar />

      <main className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-4 mb-8">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded dark:hover:bg-gray-700">
              Manage Group RFQ
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Create RFQs
            </button>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Select Project</h4>
            <select 
              className="w-72 p-2 border rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option value="">Select</option>
              {/* Add project options here */}
            </select>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Review Products</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Name of product</th>
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Size & specifications</th>
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Quantity</th>
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Technical Datasheet (TDS)</th>
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Quality Assurance Plan(QAP)</th>
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Product Comments</th>
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Selected vendors</th>
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Action</th>
                    <th className="p-4 text-left border text-gray-900 dark:text-gray-100">Technical Evaluation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="p-4 border text-gray-900 dark:text-gray-100">{productDetails.name}</td>
                    <td className="p-4 border">
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Grade, Material and other Specs"
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        />
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            placeholder="Size"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                          />
                          <span>OR</span>
                          <button className="flex items-center space-x-2 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100">
                            <File className="w-4 h-4" />
                            <span>Upload</span>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border">
                      <input
                        type="number"
                        placeholder="Enter Quantity"
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      />
                    </td>
                    <td className="p-4 border">
                      <button className="flex items-center space-x-2 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100">
                        <File className="w-4 h-4" />
                        <span>Upload TDS</span>
                      </button>
                    </td>
                    <td className="p-4 border">
                      <button className="flex items-center space-x-2 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100">
                        <File className="w-4 h-4" />
                        <span>Upload QAP</span>
                      </button>
                    </td>
                    <td className="p-4 border">
                      <input
                        type="text"
                        placeholder="Add Comments..."
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      />
                    </td>
                    <td className="p-4 border">
                      <a href="#" className="text-blue-500 dark:text-blue-300 hover:underline">
                        View selected vendors (1)
                      </a>
                    </td>
                    <td className="p-4 border">
                      <div className="space-y-2">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                          <Trash className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                          <Plus className="w-4 h-4" />
                          <span>Add variant</span>
                        </button>
                      </div>
                    </td>
                    <td className="p-4 border">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
            <a href="/vendor/all" className="text-blue-500 dark:text-blue-300 hover:underline">
              Add More Products
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Suggested Terms</h4>
              <ol className="list-decimal pl-6 space-y-4 text-gray-900 dark:text-gray-100">
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
                  <label className="block mb-2 text-gray-900 dark:text-gray-100">Add your own terms (Optional)</label>
                  <textarea
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    rows={5}
                    placeholder="You can mention your terms regarding Freight Charges, Payment Terms..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-gray-900 dark:text-gray-100">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                    Create RFQ
                  </button>
                  <button type="button" className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
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
