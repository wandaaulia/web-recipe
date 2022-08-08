import React from 'react'
import { Link } from "react-router-dom";
import img from '../assets/img/notfound.gif';

const NoFound = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
          <h2 className='font-bold text-lg mb-4'> Oppss - 404 </h2>
      <h2 className='font-bold flex'>  You have reach the edge of universe </h2>
      <div className='bg-red-500 h-32 w-32 mt-8'>
      <img src={img} alt="gif" />
      </div> 
      <Link to="/" className=' text-center mt-5 bg-gray-500 text-white rounded-lg py-4 px-4'> Back to Home </Link>
  
    </div>
  )
}

export default NoFound