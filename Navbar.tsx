
import React from 'react';
// FIX: Import NavLink from react-router-dom instead of accessing it from the window object.
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const activeLinkClass = 'bg-primary text-white';
  const inactiveLinkClass = 'text-gray-300 hover:bg-neutral hover:text-white';

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-white text-xl font-bold">
            <NavLink to="/">Employee Portal</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/form"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              Employee Form
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;