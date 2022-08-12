import React from 'react'
import { useGetCategoryFoodQuery } from '../services/Apis';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ComponentItem from './ComponentItem';
import ResponsiveItem from './ResponsiveItem';

const ContainerList = (props) => {

     const { data, error, isLoading } = useGetCategoryFoodQuery(props.query);

    let arrayData;

    if(data) {
        arrayData = data.meals.slice(1, 9); 
    }


  return (
    <div className='w-full md:w-11/12 mx-auto my-6 '>
     <h3 className='mb-4 text-xl font-semibold black-title-detail md:w-11/12 md:mx-0 mx-5  xl:text-3xl 2xl:text-4xl'> {props.title}  </h3> 

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <div className='mt-8 mb-8'>Loading...</div>
      ) : data ? 
      <>  
      <div className='md:hidden'>  
      <Swiper
  id="main" slidesPerView={1.4} watchSlidesProgress={true} className="flex w-full flex-row flex-wrap">
      {
      arrayData.map((item) => 
        (
          <div key={item.idMeal}> 
         <SwiperSlide key={item.idMeal} className='item-categories justify-center ml-5 flex w-100 h-7 flex-col'> 
          <ComponentItem item={item}/>
       </SwiperSlide>
        </div>
      )) 
      }
      </Swiper> 
      </div>
      
<div className='hidden md:flex w-11/12 md:w-full'>
        <Swiper breakpoints={{
    1024: {
      slidesPerView: 4,
    },
    768: {

      slidesPerView: 3,
    },
        1280: {

      slidesPerView: 4,
    },
       1380: {

      slidesPerView: 4,
    },
  }}
  id="main" navigation={true}  modules={[Navigation]} className="mySwiper"> 
   {
      arrayData.map((item) => 
        (
          <div key={item.idMeal}> 
         <SwiperSlide key={item.idMeal} className='item-categories justify-center mr-3 lg:mr-3 xl:mr-4 flex  w-full h-7  flex-col'> 
          <ResponsiveItem item={item}/>
       </SwiperSlide>
        </div>
      )) 
      }
        </Swiper>
      </div>  
      </>
      : 
      
      null
      }
    </div>
  )
}

export default ContainerList