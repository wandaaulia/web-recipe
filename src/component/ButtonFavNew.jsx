import React, {useState} from 'react'
import {  BsHeartFill} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { setFav,  unSetFav } from '../features/recipeSlice';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../config/firebase';
import {  useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const ButtonFavNew = (props) => {
    const [favIcon, setFavIcon] = useState(false);
     const [user] = useAuthState(auth);

    const {idMeal, strMealThumb, strMeal} = props;

    const navigate = useNavigate();

    const fav = useSelector((state) => state.recipe.itemFav); 

      let userEmail;
         let findUser;
           let getUserFav;

    if(user) {
   userEmail = user.email;
  findUser = fav.filter((item) => item.userEmail === userEmail);
  getUserFav = findUser.find((item) => item.idMeal === idMeal);

    }


   const dispatch = useDispatch();

    const onFav = async () => {
      if(!user) { 
           return navigate('/login');
      }
          setFavIcon(!favIcon);   
          await dispatch(setFav({userEmail, idMeal, strMealThumb, strMeal}));
            
          Swal.fire({
            title: "Saved to your favorite recipe",
            confirmButtonText: "OK",
             confirmButtonColor: 'rgb(248 113 113)',
            backdrop: false,
            color: '#ffff',
            background: 'rgba(0, 0, 0, .7)',
             timer: 1500
          });
         
    }

    const unFav =  async () => { 
       if(getUserFav !== undefined) {
        const { id} = getUserFav;
  
        setFavIcon(!favIcon);
         await dispatch(unSetFav(id)); 
        }
    }
    
let iconFav;

    if(user) {
      iconFav = getUserFav;
    } else {
    iconFav =  fav.find(item => item.idMeal === idMeal);
    }


  return (
    <> {
      
      user ? 
      iconFav ? 
       <button className=' w-1/2 justify-center items-center flex flex-row text-sm border border-solid border-red-400 text-black px-4 py-2 rounded-full' onClick={unFav}>
 <div className='text-2xl mr-2  md:text-2xl 2xl:text-2xl text-red-500 md:mr-2'> 
      <BsHeartFill className='cursor-pointer '/>
      </div>
      Favorite
        </button>
     :
     <button className=' w-1/2 justify-center items-center flex flex-row text-sm border border-solid border-red-400 text-black px-4 py-2 rounded-full' onClick={onFav}>
 <div className='text-2xl mr-2 md:text-2xl 2xl:text-2xl text-red-500 md:mr-2'> 
      <AiOutlineHeart className='cursor-pointer '/>
      </div>
      Favorite
        </button>

      :
      <button className='w-1/2 justify-center items-center flex flex-row text-sm border-2 border-solid border-red-400 text-black px-0 w-1/2 py-1 text-center  md:px-4 md:py-3  rounded-full' onClick={onFav}>
 <div className='text-2xl mr-2  md:text-2xl 2xl:text-2xl text-red-500 mr-3 md:mr-2'> 
      <AiOutlineHeart className='cursor-pointer '/>
      </div>
      Favorite
        </button>

    }


     </>
  )
}

export default ButtonFavNew
