import React from 'react';
import { NAVIGATION_ITEMS } from '../../utils/constants';

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === item.id
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
