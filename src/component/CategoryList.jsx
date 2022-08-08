import React from 'react'
import ComponentItem from './ComponentItem';
import { useGetCategoryFoodQuery } from '../services/Apis';
import {  useParams } from "react-router-dom";


const CategoryList = () => {
 const { name } = useParams();


const { data, error, isLoading } = useGetCategoryFoodQuery(name);
    let arrayData;
    let errorMessage;

    if(data) {
       if(data.meals === null) {
           errorMessage = true;
           
        } else {
         arrayData = data.meals.slice(0, 9);
           errorMessage = false;
        }

    }

  return (
    <>
    
   {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        
        <div className='mt-14'>Loading...</div>
      ) : data ? 
      <div className='pl-3 flex w-full flex-row flex-wrap pt-4'> 
      { errorMessage ? <p className="mt-10 text-red-600 md:mt-20 mb-0 lg:mb-32 mx-auto"> Data is not found </p> :
     
      arrayData?.map((item, index) => 
        (
          <div key={index} className="w-1/2 my-4 md:w-1/3 lg:w-1/4 xl:w-3/12"> 
          <ComponentItem item={item} key={item.id}/>
        </div>
      )) 
      }
      
      </div>
  : null }
      
      </>
  )
}

export default CategoryList;
