import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl md:text-2xl font-bold hover:text-gray-300 transition duration-300">
          NEXT JS CRUD
        </Link>
        <div className="flex space-x-4">
          <Link href="/addtopic" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300">
            Add Topic
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
