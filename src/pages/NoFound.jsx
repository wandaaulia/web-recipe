import React from 'react'
import { Link } from "react-router-dom";
import img from '../assets/img/notfoundimg.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";

const NoFound = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
          <h2 className='font-bold text-lg mb-4'> Oppss - 404 </h2>
      <h2 className='font-bold flex'>  You have reach the edge of universe </h2>
      <div className=' h-32 w-32 mt-8  xl:w-56 xl:mb-10'>
       <LazyLoadImage  alt="gif" src={img}/>
      </div> 
      <Link to="/" className=' text-center mt-5 lg:mt-0 xl:mt-6 bg-red-400 text-white rounded-lg py-2 px-2'> Back to Home </Link>
  
    </div>
  )
}

export default NoFound