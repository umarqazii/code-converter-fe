import React from 'react';
import 'primeicons/primeicons.css';
        

const Navbar = () => {
  return (
    <div className=' w-full flex items-center justify-center'>
      <div className='bg-transparent m-1 rounded-lg border-2 border-slate-700 '>
        <ul className='text-white flex gap-8 p-5'>
            <li>Icon</li>
            <li className='text-slate-700'>|</li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Insights</li>
            <li>Integrations</li>
            <li className='text-slate-700'> | </li>
            <li className='' >Get Started <i className="pi pi-angle-right"></i></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;