import React from 'react'
import { useGetRecipeDetailQuery } from '../services/Apis';
import { useNavigate } from "react-router-dom";
import ButtonFav from './ButtonFav';
import { GiBowlOfRice } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";

const ResponsiveItem = (props) => {


       const { strMealThumb, strMeal, idMeal} = props.item;

        const { data, error } = useGetRecipeDetailQuery(idMeal);

        let country, category;

        if(data) {
          data.meals.forEach((item) => {
       country = item.strArea;
           category = item.strCategory;
          })
        }

        if(error) {
          console.log('error');
        }
   
    const navigate = useNavigate();

    const DetailFood = (id) => {
        navigate(`/detailfood/${id}`)
    }


  return (
    <>
  <div className='w-100 xl:w-full  md:flex h-40 xl:h-64 justify-center mx-auto'> 
            <img src={`${strMealThumb}`} alt="img" className='cursor-pointer w-full h-100 rounded-3xl object-cover' onClick={() => DetailFood(idMeal)}
            />
            </div>
            <div className='p-4'> 
          <h4 className='text-sm leading-snug font-semibold h-16 lg:text-lg  2xl:text-2xl lg:leading-snug'>{strMeal}</h4>
          <div className='pt-3 flex flex-row'> 
          <div className='grow'>  
             <div className='flex flex-row items-center text-sm py-1 2xl:text-lg color-grey'> 
                <GiBowlOfRice /> 
                <div className='px-1 2xl:px-3'> 
                         { data ? category : 'food'}
                </div> 
              </div>
             <div className='flex flex-row items-center text-xs 2xl:text-lg color-grey'>  <BiWorld />
               <div className='px-1 2xl:px-4'>
               { data ? country : 'world'}
              </div> </div>
     </div>

 <ButtonFav idMeal={idMeal} strMealThumb={strMealThumb} strMeal={strMeal}/>

          </div> 
          </div> 
           </>
  )
}

export default ResponsiveItem