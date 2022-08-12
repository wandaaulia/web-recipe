import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCat, unSetTutorial } from '../features/recipeSlice';
import iconChicken from '../assets/img/chicken-c.png';
import iconBeef from '../assets/img/beef-c.png';
import iconDessert from '../assets/img/dessert-c.png';
import iconPasta from '../assets/img/pasta-c.png';
import iconSideFood from '../assets/img/side-food.png';
import iconVegetarian from '../assets/img/vegetarian-c.png';

const CategoryItemHome = () => {

   const dispatch = useDispatch();

  // const itemCategory = useSelector((state) => state.recipe.itemCategory); 
  
 const itemCategory = [
    { id: 1, img: iconChicken, name: 'Chicken'},
    { id: 2, img: iconBeef, name: 'Beef'},
       { id: 3, img: iconDessert, name: 'Dessert'},
        { id: 4, img: iconPasta, name: 'Pasta'},
         { id: 5, img: iconSideFood, name: 'Side'},
          { id: 6, img: iconVegetarian, name: 'Vegetarian'}
]
  
  const activeObjectCat = useSelector((state) => state.recipe.activeObject); 



  const navigate = useNavigate();

    const searchCategory = async (name, index) => {
    await dispatch(unSetTutorial());
        await dispatch(setActiveCat(index));
        await navigate(`/search/category/${name}`);
        
    }




  const toggleActiveStyles = (index) => {
      if(itemCategory[index] === activeObjectCat) {
        return 'cursor-pointer select-none	bg-red-200 border-none font-medium  w-full text-gray-500 py-2 text-center  rounded-full';
      } else {
        return 'flex justify-center items-center cursor-pointer select-none border border-solid font-medium  w-full text-gray-500 py-2 text-center  rounded-full';
      }
  }

  return (
    <>  
    <div className='md:hidden'> 
             <Swiper breakpoints={{
    540: {
      slidesPerView: 4,
    },
  }}
  id="main" slidesPerView={3} watchSlidesProgress={true} className="mySwiper flex w-full flex-row flex-wrap">
      {
      itemCategory.map((item, index) => 
        (
         <SwiperSlide key={item.id} className='cursor-pointer pb-1 pl-1 pr-4  drop-shadow-sm'> 
         <div className='flex py-2 px-0 justify-center flex-col border border-solid border-gray-50  items-center rounded-md w-fit shadow shadow-gray-200' onClick={() => searchCategory(item.name, index)} color={toggleActiveStyles(index)}> 
            <div className='w-2/5 h-1/2 py-1'> 
         <LazyLoadImage alt="img" src={item.img} className='object-cover h-100 w-full'/>
              </div>
            <p className='text-sm'>{item.name} </p>
        </div>
       </SwiperSlide>
   
      )) 
      }
      </Swiper> 
       </div>

          <div className='hidden md:flex flex-row'> 
      {
      itemCategory.map((item, index) => 
        (
     <div key={item.id} className='cursor-pointer border border-solid border-gray-50 hover:border-red-100 pb-1 ml-0 md:mr-6 xl:p-2  drop-shadow-sm flex py-1  justify-center flex-col items-center rounded-md w-fit shadow shadow-gray-200' onClick={() => searchCategory(item.name, index)} color={toggleActiveStyles(index)}> 
            <div className=' flex w-2/5 py-2'>  
                <LazyLoadImage alt="img" src={item.img} className='object-cover h-100 w-full'/>
             </div>
            <p className='text-sm xl:text-base'> {item.name} </p>
        </div>
 
      )) 
      }

       </div>

    </>
  )
}

export default CategoryItemHome
