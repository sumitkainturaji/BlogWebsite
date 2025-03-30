import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from '@clerk/clerk-react'
import logo from '../assets/logopng.png'

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch(term)
  }

  return (
    <nav className="sticky top-0 left-0 right-0 w-full bg-yellow-400 h-20 flex items-center justify-between shadow-md z-50 px-4 md:px-8">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
          />
        </Link>

        <div className="hidden md:flex items-center bg-white px-4 py-2 rounded-full shadow-md flex-1 max-w-md mx-8">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search Country..."
            value={searchTerm}
            onChange={handleSearch}
            className="outline-none bg-transparent text-gray-800 w-full placeholder-gray-400"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-gray-800 font-semibold">
            <li className="hover:text-white transition duration-200">
              <NavLink to="/" className="px-2 py-1">
                Home
              </NavLink>
            </li>

            <li className="hover:text-white transition duration-200">
              <NavLink to="/how-to-use" className="px-2 py-1">
                How to Use
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200 font-medium">
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-yellow-400 shadow-lg md:hidden">
          <div className="px-4 py-2 bg-white mx-4 my-2 rounded-lg">
            <div className="flex items-center px-3 py-2">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search Country..."
                value={searchTerm}
                onChange={handleSearch}
                className="outline-none bg-transparent text-gray-800 w-full placeholder-gray-400"
              />
            </div>
          </div>
          <ul className="flex flex-col items-start px-6 py-4 space-y-4">
            <li className="w-full">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-gray-800 hover:text-white font-medium"
              >
                Home
              </NavLink>
            </li>
            <li className="w-full"></li>
            <li className="w-full">
              <NavLink
                to="/how-to-use"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-gray-800 hover:text-white font-medium"
              >
                How to Use
              </NavLink>
            </li>
          </ul>
          <div className="px-6 py-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-white text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200 font-medium"
                >
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
