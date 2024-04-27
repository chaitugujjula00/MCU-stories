import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../utils/movies.json'
import { IMG_URL } from '../utils/constants'
const Moviedetails = () => {
    const Name=useParams().id;
    const dummy = data.filter((movie)=>movie.Name === Name)
    console.log(dummy[0])
    const movie = dummy[0];
  return (
    <div>
      {/* movie image and logo */}
      <div className='p-4'>
        {movie.hrimageType === "full"? (
        <div className='relative'>
          <img className='w-full' src={IMG_URL + movie.hrimage}>
          </img>
          <img className="absolute right-[65%] bottom-[35%] z-0 w-96" src={IMG_URL + movie.logo}></img>
          <button className='absolute right-[85%] bottom-[20%] p-4 bg-red-300' >WIshList</button>
        </div>
      ):(
        <div className='relative pt-0 w-full bg-black'>
          <img className='pl-[41.5%] pr-12 py-8 ' src={IMG_URL + movie.hrimage}></img>
          <img className="absolute right-[65%] bottom-[35%] z-0 w-96" src={IMG_URL + movie.logo}></img>
        </div>
        ) }
        </div>
        
        <div className='py-4 px-40'>
        <div className='py-4 text-3xl font-semibold'>FEATURED TRAILER</div>
        <iframe className='h-[664px] w-full' src="https://www.youtube.com/embed/nqO6cEbXyKM" title="Error fixed &quot;www.youtube.com refused to connect&quot; when trying to embed video in blogs or html page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>


    </div>
  )
}

export default Moviedetails
