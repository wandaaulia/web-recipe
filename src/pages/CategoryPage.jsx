import React, {useState} from 'react'
import AppBar from '../component/AppBar'
import HeaderSearch from '../component/HeaderSearch'
import {  AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from '../component/Footer';
import Category from '../component/Category';
import { useDispatch } from 'react-redux'
import { unSetActiveCat } from '../features/recipeSlice';
import CategoryList from '../component/CategoryList';


const CategoryPage = () => {
    const [search, setSearch] = useState('');

       const dispatch = useDispatch();

     const navigate = useNavigate();

     const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nameData = data.get('name');
    setSearch('')

   await dispatch(unSetActiveCat());
   await  navigate(`/search/${nameData}`);

  };



  return (
 <div className='flex flex-col min-h-screen' > 
     <div className='flex-auto'>
      <AppBar />
      <HeaderSearch item="search"/>
      <div className='mt-4 md:mt-8 mx-auto flex flex-col items-center w-11/12 '> 

      <div className='md:mb-8 md:flex-row flex md:px-4 flex-col justify-start items-center md:w-full'>  
        <h2 className='md:w-fit text-center md:text-lg text-base md:mr-14'> Recipes For You </h2>
 
   <div className='lg:w-fit mt-4 md:mt-0 w-fit flex flex-row py-2 xl:py-1 justify-center px-2  border border-gray-300 rounded-lg border-solid items-center bg-white rounded-md'> 
         <form id="form" onSubmit={handleSubmit}>
           <button type="submit" className='w-fit text-base mr-2 md:mr-4 h-fit text-gray-500'> <AiOutlineSearch className=''/> </button>
     <input type="text" id="name" name="name" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search recipes by name' className='lg:py-2  w-72 py-1 text-sm placeholder:text-gray-500'/>
         </form>
 </div>
 </div>

  <Category />
    <CategoryList />
    </div>
     </div>
    <Footer />
    </div>
  )
}

export default CategoryPage
