import React, {useState} from 'react'
import imgBg from '../assets/img/ayam-goreng-surundeng.jpg';
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

        const navigateTo = (link) => {

      navigate(link);
    }

    
  return (
    <div className='xl:pb-10'>
    <div className='flex justify-center md:mt-14'>
     <img src={imgBg} alt="img" className="w-full md:w-60 md:rounded-3xl"/>
    </div>
    <div className='md:w-3/4 mx-auto mt-2 md:mt-14 lg:w-3/5 xl:w-2/5'>  
    <div className='flex flex-col pt-4 ml-4'> 
    <h3 className='text-3xl pb-4 text-red-500 font-medium'> Register </h3>
   
    <form id="form" onSubmit={handleSubmit}>
  <input type="email" id="email" name="email" placeholder='email' className='text-lg border-b-gray-300 border-solid border-b-2  placeholder:text-black placeholder:font-medium mb-4 py-1 w-11/12' /> 
   <input type="password" id="password" name="password" placeholder='password' className='text-lg border-b-gray-300 border-solid border-b-2  placeholder:text-black placeholder:font-medium py-1 w-11/12' /> 
     <div className='mt-6 '>  
           <p className='text-red'>{errorMessage}</p>
     <button type="submit" className='mt-8 rounded-full bg-red-400 p-2 text-white text-lg font-medium w-11/12 mx-auto'> Register </button>
     <button className='mt-4 p-2 text-black text-base mx-auto' onClick={() => navigateTo('/login')}> I already have an account, login </button>
     </div>
    </form>
     </div>
     </div>
   </div>
 
  )
}

export default Register