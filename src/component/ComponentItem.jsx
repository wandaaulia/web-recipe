import React from 'react'
import { useGetRecipeDetailQuery } from '../services/Apis';
import { useNavigate } from "react-router-dom";
import ButtonFav from './ButtonFav';
import { GiBowlOfRice } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { unSetTutorial } from '../features/recipeSlice';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swal from "sweetalert2";

const ComponentItem = (props) => {

   const { strMealThumb, strMeal, idMeal} = props.item;

     const dispatch = useDispatch();

    const { data, error} = useGetRecipeDetailQuery(idMeal);

       let country, category;

        if(data) {
          data.meals.forEach((item) => {
       country = item.strArea;
           category = item.strCategory;
          });
          
          
        }

        if(error) {
          console.log('error');
        }
   
    const navigate = useNavigate();

    const DetailFood = async (id) => {
        await dispatch(unSetTutorial());
      
      if(!category) {
        Swal.fire({
            title: "Sorry, This recipe isn't available anymore",
            confirmButtonText: "OK",
             confirmButtonColor: 'rgb(248 113 113)',
            backdrop: false,
            color: '#ffff',
            background: 'rgba(0, 0, 0, .7)',
             timer: 1500
          });
      } else {
       await navigate(`/detailfood/${id}`);
      }
    }

    

  return (
  <div className='cursor-pointer' onClick={() => DetailFood(idMeal)} > 
   <div className='w-11/12 flex h-40 justify-center ml-0'> 
         <LazyLoadImage alt="img" src={`${strMealThumb}`} className='cursor-pointer w-full h-100 rounded-3xl  object-cover' onClick={() => DetailFood(idMeal)} />
              {/* <img alt="img" src={`${strMealThumb}`} className='cursor-pointer w-full h-100 rounded-3xl  object-cover' onClick={() => DetailFood(idMeal)} /> */}
            </div>
            <div className='pt-4 pb-2 pr-4 md:py-4'> 
          <h2 className='text-base leading-snug font-semibold h-14  text-black  md:h-12 flex'>{strMeal.substr(0, 30)}</h2>
          <div className='flex flex-row pt-1'> 
          <div className='grow'>  
             <div className='flex flex-row items-center text-sm py-1 color-grey'> 
                <GiBowlOfRice /> 
                <div className='px-1 '> 
                      { data ? category : 'food'}
                </div> 
              </div>
             <div className='flex flex-row items-center text-sm color-grey'>  <BiWorld />
               <div className='px-1'>
                  { data ? country : 'world'}
              </div> </div>
     </div>

    <ButtonFav idMeal={idMeal} strMealThumb={strMealThumb} strMeal={strMeal}/>
          </div> 
          </div> 


        
  </div>
  )
}

export default ComponentItem