import React, { useState} from 'react'
import imgBg from '../assets/img/ayam-goreng-surundeng.jpg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../config/firebase'
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
 const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

   const navigateTo = (link) => {

      navigate(link);
    }

    const signInWithGoogle = async (e) => {
      e.preventDefault();

    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }

  }

  return (
    <div className='xl:pb-10'>
    <div className='flex justify-center md:mt-14'>
     <img src={imgBg} alt="img" className="w-full md:w-60 md:rounded-3xl"/>
    </div>
    <div className='md:w-3/4 mx-auto mt-2 md:mt-14 lg:w-3/5 xl:w-2/5'>  
    <div className='flex flex-col pt-4 ml-4'> 
    <h3 className='text-3xl pb-4 text-red-500 font-medium'> Login </h3>
    <form id="form" onSubmit={handleSubmit}>
  <input type="email" id="email" name="email" placeholder='email' className='text-lg border-b-gray-300 border-solid border-b-2  placeholder:text-black placeholder:font-medium mb-4 py-1 w-11/12' /> 
   <input type="password" id="password" name="password" placeholder='password' className='text-lg border-b-gray-300 border-solid border-b-2  placeholder:text-black placeholder:font-medium py-1 w-11/12' /> 
      <p className='text-red-500'>{errorMessage}</p>
    <div className='mt-6 '>  
            <button type="submit" className='mt-3 rounded-full bg-red-400 p-2 text-white text-lg font-medium w-11/12 mx-auto'> Login </button>
       <button className='mt-4 rounded-full p-2 text-black text-lg border-solid border-red-300 border-2  font-medium w-11/12 mx-auto' onClick={signInWithGoogle}> Sign in With Google </button>
     <button className='mt-4  p-2 text-black text-base mx-auto hover:text-gray-500' onClick={() => navigateTo('/register')}> I don't have a account, register </button>
     </div>
    </form>
     </div>
    
     </div>
   </div>
 
  )
}

export default Login