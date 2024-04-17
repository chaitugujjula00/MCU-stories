import React from 'react'
import data from'../utils/series.json'
import Card from './Card';
// bg-[url('https://getwallpapers.com/wallpaper/full/5/7/d/64804.jpg')]
const Body = () => {
  
  return (
    <div className=" bg-contain bg-fixed bg-bottom bg-no-repeat">
      
      <div className="grid grid-flow-row grid-cols-6 px-40 py-6 shadow-md rounded-md ">
      {
        data.map(movie=>
            <Card cardData={movie}/>
          )
      }
      
    </div>
    </div>
  )
}

export default Body