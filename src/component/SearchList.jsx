import React from 'react'
import { useSearchRecipeByNameQuery } from '../services/Apis';
import ComponentItem from './ComponentItem';
import LoadingApi from './LoadingApi';

const SearchList = (props) => {

     const { data, error, isLoading } = useSearchRecipeByNameQuery(props.name);
    let arrayData;
    let errorMessage;


    if(data) {
       if(data.meals === null) {
           errorMessage = true;
           
        } else {
          if(data.meals.length <= 5) {
            arrayData = data.meals.slice(0, 6);
                  errorMessage = false;
          } else {
                arrayData = data.meals.slice(6, 12);
           errorMessage = false;
          }
        }
    }


  return (
    <>
       {error ? (
        <div className='mx-8 mt-8'>Oh no, there was an error</div>
      ) : isLoading ? (
        
        <div className='mt-8'>
          <LoadingApi />
        </div>
      ) : data ? 
      
      <div className='pl-3 flex w-full flex-row flex-wrap pt-4'> 
      { errorMessage ? <p className="mt-10 text-red-600 md:mt-20 mb-0 lg:mb-32 mx-auto"> Data is not found </p> :
     
      arrayData?.map((item) => 
        (
          <div key={item.idMeal} className="w-1/2  my-4 md:w-1/3 lg:w-1/4 xl:w-3/12"> 
          <ComponentItem item={item} key={item.id}/>
        </div>
      )) 
      }
      
      </div>
  : null }
      
      </>
  )
}

export default SearchList;
