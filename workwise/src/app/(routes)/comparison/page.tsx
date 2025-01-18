'use client';
export default function ComparisonPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Vendor Comparison</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Vendor A</h2>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Vendor B</h2>
          </div>
        </div>
      </div>
    </div>
  )
}