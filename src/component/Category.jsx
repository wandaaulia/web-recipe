import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import FilterCategory from './FilterCategory'
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCat, unSetTutorial } from '../features/recipeSlice';

const Category = () => {

   const dispatch = useDispatch();

  const listCategory = useSelector((state) => state.recipe.itemList); 

  const activeObjectCat = useSelector((state) => state.recipe.activeObject); 



  const navigate = useNavigate();

    const searchCategory = async (name, index) => {
    await dispatch(unSetTutorial());
        await dispatch(setActiveCat(index));
        await navigate(`/search/category/${name}`);
        
    }




  const toggleActiveStyles = (index) => {
      if(listCategory[index] === activeObjectCat) {
        return 'cursor-pointer select-none	bg-red-200 border-none font-medium  w-full text-gray-500 py-2 text-center  rounded-full';
      } else {
        return 'flex justify-center items-center cursor-pointer select-none border border-solid font-medium  w-full text-gray-500 py-2 text-center  rounded-full';
      }
  }

  return (
    <>  
    <div className='md:hidden flex flex-row flex-wrap w-full mx-auto mt-4 px-2'>
     
 <Swiper
  id="main" slidesPerView={3} watchSlidesProgress={true} className="flex w-full flex-row flex-wrap"
>
     { listCategory.map((item, index) => 
     (
       <SwiperSlide key={index} className="w-6 px-1 justify-center flex"> 
       <FilterCategory item={item} index={index} key={index} onClick={() => searchCategory(item, index)} color={toggleActiveStyles(index)}/>
        </SwiperSlide>

     )
     )}
  </Swiper>
    </div>
      <div className='hidden md:flex flex-row flex-wrap w-full mx-auto mt-4 px-2'>
            { listCategory.map((item, index) => 
     (
      <div className='width-category mx-2' key={index}> 
       <FilterCategory item={item} index={index} key={index} onClick={() => searchCategory(item, index)} color={toggleActiveStyles(index)}/>
   </div> 
     )
     )}
    </div>
    </>
  )
}

export default Category
