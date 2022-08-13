import React from 'react'
import Lottie from 'lottie-react';
import LoadingItem from '../assets/json/loading_item.json';

const LoadingApi = () => {
  return (
        <div className='flex flex-col justify-center h-auto items-center '>
         <div className='w-32 mx-auto md:w-64 my-auto lg:w-48'>
      <Lottie loop={true} animationData={LoadingItem} 
      />
    </div>
        </div>
  )
}

export default LoadingApi
