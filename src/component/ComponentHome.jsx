import React from 'react'
import JapanFood from './JapanFood'


const ComponentHome = () => {
  return (
     <div className='mt-8 md:mt-8 xl:mt-14 mx-auto flex flex-col items-center w-11/12 '> 
        <h1 className='text-lg w-full font-semibold mb-1 xl:text-2xl  2xl:text-3xl'> 
        Special Recipe for Japan
         </h1> 

          <JapanFood/>
    </div>
  )
}

export default ComponentHome
