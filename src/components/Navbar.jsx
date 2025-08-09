// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Icon library

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Define navigation links in an array for easier management
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/aboutus' },
//     { name: 'Accommodation', path: '/accommodation' },
//     { name: 'Events', path: '/events' },
//     { name: 'Restaurants', path: '/restaurants' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   // Style for the active NavLink
//   const activeLinkStyle = {
//     color: 'yellow-500', // A blue color for the active link
//     textDecoration: 'underline',
//     textUnderlineOffset: '4px',
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <NavLink to="/" className="text-2xl font-bold text-gray-800">
//               Crest The Grand
//             </NavLink>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
//                 className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-300 "
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden pb-4">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)} // Close menu on link click
//                 style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
//                 className="text-gray-600 hover:text-yellow-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { logo } from '../assets';

// Import the logo image from your assets folder
// Make sure this path is correct for your project structure!


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Events', path: '/events' },
    { name: 'Restaurants', path: '/restaurants' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const activeLinkStyle = {
    color: '#f59e0b', // Hex for yellow-500
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-3">
              {/* This is your logo image */}
              <img
                className="h-20 w-auto pl-5" 
                src={logo}
                alt="Crest The Grand Logo"
              />
              {/* This is your text */}
              <span className="text-2xl font-bold text-gray-800">
                {/* Crest The Grand */}
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-gray-600 hover:text-yellow-500 font-medium transition-colors duration-300"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-gray-600 hover:text-yellow-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;