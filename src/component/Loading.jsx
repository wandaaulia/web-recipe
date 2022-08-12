import React from 'react'
import Lottie from 'lottie-react';
import loadingFood from '../assets/json/loading-food.json';

const Loading = () => {
  return (
        <div className='flex flex-col justify-center h-screen  items-center '>
         <div className='w-32 mx-auto md:w-64 my-auto lg:w-48'>
      <Lottie loop={true} animationData={loadingFood} 
        initialSegment={[72, 155]}
      />
    </div>
        </div>
  )
}

export default Loading
