import React from 'react'
import AppBar from '../component/AppBar'
import {  useParams } from "react-router-dom";
import { useGetRecipeDetailQuery } from '../services/Apis';
import ContainerList from '../component/ContainerList';
import Footer from '../component/Footer';
import ButtonBar from '../component/ButtonBar';


const DetailItem = () => {
    const { id } = useParams();

    let dataArray;
    let desc;
     
    const { data, error, isLoading } = useGetRecipeDetailQuery(id);

    if(data) {
      dataArray = data.meals;
    }

  
  return (
 <div className='flex flex-col min-h-screen' > 
      <AppBar />
  <div className='flex-1 mb-0'>
            {error ? (
        <div className="mx-3">Oh no, there was an error</div>
      ) : isLoading ? (
        <div className="ml-8">Loading...</div>
      ) : data ? 
      
        
        dataArray.map((item) => {

          desc = item.strInstructions.split("STEP");

          return (

  <div key={item.idMeal}>
            <div className=' flex flex-col md:flex-row md:mx-10 md:items-center md:justify-center'> 
            <div className=" w-11/12 mx-auto md:w-80 lg:w-96 lg:h-80  xl:w-2/5 xl:pr-4 xl:h-fit h-72 pt-4 lg:pt-10  md:order-last md:mx-0"> 
              <img src={item.strMealThumb} alt="img" className="w-full h-full rounded-lg  object-cover"/>
            </div> 
            
            <div className='md:pt-10  md:w-9/12 md:mx-auto mx-2 lg:pl-3 xl:pl-4 pt-4 md:pt-0 '>  
            <div className='w-11/12 mx-auto  h-100 md:w-full'>
              <h2 className='text-2xl text-black text-left pt-4 pb-1 font-bold md:text-5xl md:mx-auto lg:text-5xl 2xl:text-5xl 2xl:leading-snug'>
               {item.strMeal} </h2>
               <p className='text-base text-gray-country md:mt-4 '> {item.strArea}  </p>
             <p className='text-base mt-4 font-bold text-dark-gray-detail '> Category : <span className='font-normal'> {item.strCategory}   </span> </p>
              </div>  

                <div className='hidden md:flex flex-row mt-6 md:w-9/12 lg:w-6/12 h-10'> 
                 <ButtonBar item={item.strYoutube} idMeal={item.idMeal} strMealThumb={item.strMealThumb} strMeal={item.strMeal}/>
                </div>

            <div className='z-10000 border-t border-solid border-gray-200 flex fixed bottom-0 justify-center py-2  h-16  inset-x-0 mb-0 px-4  bg-white md:hidden flex-row'> 
                 <ButtonBar item={item.strYoutube} idMeal={item.idMeal} strMealThumb={item.strMealThumb} strMeal={item.strMeal} />
                </div>


                </div>
                
            </div>
            

            <div className="pt-10 w-11/12 md:mx-auto mx-2  pb-8 md:pb-4 xl:pt-24 xl:pb-20"> 
            
           <h3 className='text-xl font-semibold black-title-detail md:w-11/12 md:mx-0 mx-3 xl:text-3xl 2xl:text-4xl'> Instructions   </h3> 
          
              <div className='mx-3 md:mx-0 text-justify'> 
                {desc.map((d) => 
                <p key={d} className='my-3 text-justify'>  {d} </p>
                )}
               </div>
          </div>
    <ContainerList title={item.strCategory} query={item.strCategory}/>

        </div>
          )  } )
      
 : 
      
      null
      }

      </div>
       <Footer />
    </div>
  )
}

export default DetailItem