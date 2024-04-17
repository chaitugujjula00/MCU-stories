import React from 'react'
import { IMG_URL } from '../utils/constants';
const Card = (props) => {
    const CardData=props?.cardData;
  return (
    <div className='m-2 rounded-xl group  text-red-500  hover:cursor-pointer'>
            <div className='relative overflow-hidden h-fit rounded-xl  group-hover:shadow-xl group-hover:shadow-black transition-all duration-500'>
            <img className='bg-center w-[100%] p-1 rounded-xl group-hover:p-1 group-hover:scale-110 transition-all duration-500' src={IMG_URL+CardData?.image} />
            <div className='absolute w-full h-full bg-black/20 flex flex-col items-center  top-[100%] opacity-0 text-white  group-hover:top-[65%] group-hover:opacity-100 transition-all duration-500'>
              <div className='text-[#f24747] text-xl font-extrabold'>Phase: {CardData?.Phase}</div>
              <div className='text-[#f24747] text-xl font-extrabold'>IMDB : {CardData?.IMDBrating}</div>
              <div className='text-[#f24747] text-xs font-bold'>Collections : {CardData?.TotalGross}</div>
            </div>
            <div className='absolute w-full flex justify-center  top-[30%] opacity-0 text-white  group-hover:top-[40%] group-hover:opacity-100 transition-all duration-500'>
              <button className='px-4 py-2 border-2 border-black bg-red-600 font-semibold rounded-full rounded-br-none hover:bg-red-800 hover:shadow-2xl'> View Details </button>
            </div>
            </div>
            <h1 className='px-4 py-2 text-sm font-bold'>{CardData?.Name}</h1>
          </div>
  )
}

export default Card