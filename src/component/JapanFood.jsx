import React from 'react'
import {useSearchRecipeByNameQuery} from '../services/Apis';
import ComponentItem from './ComponentItem';


const JapanFood = () => {

     const { data, error, isLoading } = useSearchRecipeByNameQuery("chocolate");
    let arrayData;
    let errorMessage;


    if(data) {
       if(data.meals === null) {
           errorMessage = true;
           
        } else {
         arrayData = data.meals.slice(0, 6);
           errorMessage = false;
        }
    }


  return (
    <>
       {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <div className='mt-8'>Loading...</div>
      ) : data ? 
      
      <div className='flex w-full flex-row flex-wrap pt-0'> 
      { errorMessage ? <p className="mt-10 text-red-600 md:mt-20 mb-0 lg:mb-32 mx-auto"> Data is not found </p> :
     
      arrayData?.map((item) => 
        (
          <div key={item.idMeal} className=" w-1/2 md:w-1/3 my-4 md:my-2 lg:w-1/4 lg:w-2/6 xl:w-3/12"> 
          <ComponentItem item={item} key={item.id}/>
        </div>
      )) 
      }
      
      </div>
  : null }
      
      </>
  )
}

export default JapanFood;
