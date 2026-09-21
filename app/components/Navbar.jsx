'use client'
import { useState } from 'react'
import NavLinks from './NavLinks'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {

  const [navBarOpen, setNavBarOpen] = useState(false)
  function handleNavBar() {
    setNavBarOpen((prev) => !prev)
  }
  return (
    <nav className={`fixed top-0  h-16 md:h-22 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md transition-all ${!navBarOpen ? 'border-b border-slate-700/50' : ''
      }`}>
      <div className="flex h-full 
       justify-between items-center px-4 py-0 ">
        <div ></div>
        <div className="hidden md:block ">
          <NavLinks />
        </div>
        <div className="md:hidden text-white flex items-center z-50 ">
          <button onClick={handleNavBar}>
            {navBarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3BottomLeftIcon className="h-6 w-6" />
            )}
          </button>

        </div>
      </div>
      {navBarOpen && (
        <div className="md:hidden absolute top-16 left-0 pb-2 right-0 bg-[#121212] border-b border-slate-700/50">
          <NavLinks />
        </div>
      )}
    </nav>
  )
}

export default Navbar
