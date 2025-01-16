// src/components/Navbar.tsx
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">WorkWise</Link>
        <div className="space-x-4">
          <Link href="/find-vendor" className="hover:text-blue-600">Find Vendors</Link>
          <Link href="/create-rfq" className="hover:text-blue-600">Create RFQ</Link>
          <Link href="/rfq-management" className="hover:text-blue-600">RFQ Management</Link>
          <Link href="/magic-search" className="hover:text-blue-600">Magic Search</Link>
          <Link href="/comparison" className="hover:text-blue-600">Comparison</Link>
        </div>
      </div>
    </nav>
  )
}