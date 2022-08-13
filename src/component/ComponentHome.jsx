import React from 'react'
import JapanFood from './JapanFood'


const ComponentHome = () => {
  return (
     <div className='mt-8 md:mt-10 xl:mt-16 lg:mt-14 mx-auto flex flex-col items-center w-11/12 '> 
        <h1 className='text-lg w-full font-semibold mb-2 xl:text-2xl  md:mb-4 lg:mb-5 xl:mb-8 2xl:text-3xl'> 
      Chocolate Recipes from Around the World
         </h1> 

          <JapanFood/>
    </div>
  )
}

export default ComponentHome
