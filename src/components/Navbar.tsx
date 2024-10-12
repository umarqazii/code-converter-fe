import React from 'react';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='bg-transparent m-1 rounded-lg border-2 border-slate-700'>
        <ul className='text-white flex items-center lg:gap-8 md:gap-6 sm:gap-4 gap-2 p-2 flex-wrap justify-center'>
          {/* Left icon */}
          <li className='flex items-center justify-center'>
            <i className="pi pi-compass text-xl bg-indigo-500 p-2 rounded-full"></i>
          </li>
          <li className='text-slate-700 hidden sm:block'>|</li>
          <Link to="/" className='cursor-pointer'>Feature</Link>
          <Link to="/" className='cursor-pointer'>Pricing</Link>
          <Link to="/insights" className='cursor-pointer'>Insights</Link>
          <Link to="/integrations" className='cursor-pointer'>Integrations</Link>
          <li className='text-slate-700 hidden sm:block'>|</li>
          {/* Get Started button */}
          <li className='w-full sm:w-auto flex justify-center mt-2 sm:mt-0'>
            <button className='bg-gradient-to-r from-blue-800 to-purple-800 px-4 py-2 rounded-lg shadow-lg flex items-center hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800 transition-all duration-400'>
              Get Started &nbsp; | <i className="pi pi-angle-right ml-2"></i>
            </button>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
