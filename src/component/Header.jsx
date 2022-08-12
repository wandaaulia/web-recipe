import React, {useState} from 'react'
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from 'react-redux'
import { unSetActiveCat } from '../features/recipeSlice';

const Header = () => {
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

        
   const dispatch = useDispatch();

     const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    setSearch('')
  
    
    await dispatch(unSetActiveCat());
    await navigate(`/search/${name}`);

  };



  return (
    <> 
    <div className='background-header-recipe flex flex-col  w-full mx-auto pt-8 lg:pt-4 items-center justify-center'
    > 
    <div> 
      <h1 className=' text-center font-bold color-title-header text-3xl pb-3 md:text-4xl md:pb-2 lg:pb-4 lg:text-5xl'> WE RECIPE </h1>
          <p className='text-center px-8 text-color-header ' > Helping you cook a variety of dishes from all over the world  </p>
   </div>
   <div className='hidden md:flex pt-8'>
      <form id="form" className='bg-white w-full md:py-2 lg:py-0 focus:border focus:border-solid focus:border-red-500 md:px-8 rounded' onSubmit={handleSubmit}> 
     <input type="text" id="name" name="name" placeholder='Search recipes by name' value={search} onChange={(e) => setSearch(e.target.value)} className='lg:py-4  w-96 py-1 text-lg placeholder:text-gray-400'/>
       <button type="submit" className='text-lg text-gray-400'> 
     <MdSearch />
        </button>
      </form>
   </div>
    </div>
    </>
  )
}

export default Header