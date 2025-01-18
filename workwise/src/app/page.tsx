// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-montserrat overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-transparent py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-white">WorkWise</div>
          <div className="space-x-6 flex items-center">
            <Link href="#" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition">For Vendors</Link>
            <Link href="" className="text-gray-300 hover:text-white transition">Magic Search</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition">About</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition">Contact</Link>
            <div className="space-x-4">
              <Link 
                href="/login" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

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

          {/* Circular Image Containers */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 space-y-6">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-24 h-24 bg-gray-700/50 rounded-full 
                absolute animate-float animation-delay-${num * 500}`}
                style={{
                  top: `${num * 25}%`,
                  left: `${num * 10}%`,
                }}
              ></div>
            ))}
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 space-y-6">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-24 h-24 bg-gray-700/50 rounded-full 
                absolute animate-float animation-delay-${num * 500}`}
                style={{
                  top: `${num * 25}%`,
                  right: `${num * 10}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}