import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaHeart } from 'react-icons/fa';

function Header() {
  return (
    <header className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
            <Link to="/" className="flex items-center mr-4 cursor-pointer transition-colors hover:bg-blue-500 hover:text-white p-4 rounded-lg shadow-md font-semibold text-lg transform hover:scale-105">
                <FaHome className="h-6 w-6 mr-2" />
                Home
            </Link>
            <Link to="/Favorites" className="flex items-center cursor-pointer transition-colors hover:bg-red-500 hover:text-white p-4 rounded-lg shadow-md font-semibold text-lg transform hover:scale-105">
                <FaHeart className="h-6 w-6 mr-2" />
                Favorites
            </Link>
        </nav>
    </header>
  )
}

export default Header