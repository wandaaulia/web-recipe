import React from 'react'
import { useSelector} from 'react-redux';
import ComponentItem from '../component/ComponentItem';
import AppBar from '../component/AppBar';
import HeaderSearch from '../component/HeaderSearch';
import Footer from '../component/Footer';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../config/firebase';


const Favorite = () => {

const fav = useSelector((state) => state.recipe.itemFav); 
const [user] = useAuthState(auth);

 const navigate = useNavigate();

  const navigateTo = async (link) => {
      await navigate(link);
    }
      let userEmail;
         let findUser;

    if(user) {
   userEmail = user.email;
  findUser = fav.filter((item) => item.userEmail === userEmail);
    }

    console.log(userEmail);
    console.log(findUser);
    
   console.log(fav);
  return (
    <div className='flex flex-col min-h-screen' > 
     <div className='flex-1 mb-4 xl:mb-14'>
      <AppBar />
      <HeaderSearch />
<div className='mt-4 md:mt-8 mx-auto flex flex-col items-center w-11/12 '>
      <div className='md:mb-8 mt-4 md:flex-row flex md:px-4 flex-col justify-start items-center md:w-full'>  

        <h2 className='md:w-full text-center md:text-xl text-lg font-semibold color-favorite-text'> Your Favorite Recipes </h2>
        </div>



      {  user ? 
          
      findUser.length > 0 ? 
          <div className='flex w-full flex-row flex-wrap pt-4'> 

    {
  
      findUser.map((item) => 
        (
          <div key={item.idMeal} className="w-1/2 my-2 lg:w-2/6 xl:w-3/12 "> 
          <ComponentItem item={item} key={item.id}/>
        </div>
      )) 


      }

    </div>
     :   <div className='flex flex-col justify-center items-center mt-8 lg:pb-14 '> 
   <p className='text-center text-sm color-favorite-text md:text-base mx-auto'> Favorite recipes by clicking the heart symbol on any recipe item. </p> 
   <button className='mt-8 px-3 rounded-xl py-2 color-favorite-search text-base' onClick={() => navigateTo('/search')}> Start search recipe </button>
  </div>

    :  <div className='flex flex-col justify-center items-center mx-auto mt-8 lg:pb-14 '> 
   <p className='text-center text-sm color-favorite-text md:text-base mx-auto'> Please login. </p> 
   <button className='mt-8 px-8 md:px-12 mx-auto rounded-xl py-2 color-favorite-search text-base' onClick={() => navigateTo('/login')}> Login </button>
  </div>
      }
    
    </div>
     </div>
      <Footer />
    </div>
  )
}

export default Favorite
