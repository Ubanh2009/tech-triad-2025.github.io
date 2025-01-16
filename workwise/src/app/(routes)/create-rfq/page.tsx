export default function CreateRFQPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New RFQ</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">RFQ Title</label>
              <input 
                type="text" 
                className="w-full border rounded p-2"
                placeholder="Enter RFQ Title"
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create RFQ
          </button>
        </form>
      </div>
    </div>
  )
}