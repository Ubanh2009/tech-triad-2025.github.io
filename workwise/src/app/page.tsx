// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          WorkWise RFQ Platform
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6 w-full">
          <Link 
            href="/find-vendor" 
            className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">Find Vendors</h2>
            <p className="text-gray-600">Search and discover potential vendors</p>
          </Link>

          <Link 
            href="/create-rfq" 
            className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">Create RFQ</h2>
            <p className="text-gray-600">Generate new Request for Quotation</p>
          </Link>

          <Link 
            href="/rfq-management" 
            className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-100 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">RFQ Management</h2>
            <p className="text-gray-600">Track and manage your RFQs</p>
          </Link>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link
            href="/magic-search"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Magic Search
          </Link>
          <Link
            href="/comparison"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Vendor Comparison
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          © 2024 WorkWise RFQ Platform. TechTriad Hackathon Project.
        </p>
      </footer>
    </div>
  );
}