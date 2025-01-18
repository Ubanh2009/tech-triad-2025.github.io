import Link from 'next/link';
import Navbar from '../components/Navbar'; // Import the new Navbar component

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-montserrat overflow-hidden">
      {/* New Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="./videoplayback.webm"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay for Dim Effect */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 text-white">
            WorkWise: Procurement Reimagined
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Streamline your vendor selection, automate RFQs, and make data-driven procurement decisions with unprecedented ease.
          </p>

          {/* Interactive Elements */}
          <div className="flex justify-center space-x-6">
            <Link 
              href="/find-vendor" 
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg 
              hover:bg-blue-700 transform hover:scale-105 transition-all 
              flex items-center space-x-2 shadow-lg hover:shadow-blue-500/50"
            >
              <span>Find Vendors</span>
              <i className="fas fa-search ml-2"></i>
            </Link>
            <Link 
              href="/create-rfq" 
              className="bg-gray-800 text-white px-10 py-4 rounded-full text-lg 
              hover:bg-gray-700 transform hover:scale-105 transition-all 
              flex items-center space-x-2 shadow-lg hover:shadow-gray-500/50"
            >
              <span>Create RFQ</span>
              <i className="fas fa-file-alt ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
