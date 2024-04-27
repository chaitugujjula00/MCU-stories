import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate()
  return (
    <header className="bg-black text-white px-3 py-1 shadow-2xl">
      <div className=" container mx-auto flex justify-between items-center">
        <img className="text-2xl font-bold h-20" src={LOGO_URL}></img>
        <nav className='w-[45%]'>
          <ul className="flex justify-between items-center">
            <li><a className="text-xl hover:underline"><Link to='/movies'>Movies</Link></a></li>
            <li><a className="text-xl hover:underline"><Link to='/series'>Series</Link></a></li>
            <li><a className="text-xl hover:underline"><Link to='/characters'>Characters</Link></a></li>
            <li><a className="text-xl hover:underline"><Link to='/upcoming'>Upcoming</Link></a></li>
          </ul>
        </nav>
        
        {/* <form className='w-[25%]'>   
          <label for="default-search" class="mb-2 text-2xl font-medium sr-only text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Movies, Series..." required />
            <button type="submit" class="text-white absolute end-[5px] bottom-[5px] rounded-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-base px-4 py-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
          </div>
        </form> */}

      </div>
    </header>
  );
};

export default Header;