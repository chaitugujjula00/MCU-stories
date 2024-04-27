import React, { useState } from 'react'
import data from '../utils/movies.json'
import Card from './Card';
import { Link } from 'react-router-dom';
import Body from './Body';
const Movies = () => {
  // const Phase1 = data.filter(movie =>movie.Phase==="1");
  // const Phase2 = data.filter(movie =>movie.Phase==="2");
  // const Phase3 = data.filter(movie =>movie.Phase==="3");
  // const Phase4 = data.filter(movie =>movie.Phase==="4");
  // const Phase5 = data.filter(movie =>movie.Phase==="5");
  // const Phase6 = data.filter(movie =>movie.Phase==="6");
  const [filteredData, setFilteredData] = useState(data);
  const [searchText,setSearchText] = useState("");
  if(data.length === 0){
    return(<Body />)
  }

  return (
    <div className=" bg-contain bg-fixed bg-bottom bg-no-repeat">
       
       <div className='w-[25%] my-4 mx-auto'>   
          <label for="default-search" class="mb-2 text-2xl font-medium sr-only text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            </div>
            <input type="search" id="default-search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} class="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Movies, Series..." required />
            <button type="submit" onClick={()=>{
    const searchData = data.filter((series)=>series.Name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredData(searchData);
    // console.log(filteredData)
  }} class="text-white absolute end-[5px] bottom-[5px] rounded-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-base px-4 py-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
          </div>
        </div>

      {filteredData.length===0 ? (<h1> No data Found </h1>) : (<div className="grid grid-flow-row grid-cols-6 px-40 py-6 shadow-md rounded-md ">
      { 
        filteredData.map(movie=><Card key={movie.Name} cardData={movie}/>)
      }
      
    </div>)}
    </div>
  )
}

export default Movies