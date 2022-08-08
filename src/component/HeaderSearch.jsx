import React from 'react'
import img from '../assets/img/dessert.jpg'
import seafood from '../assets/img/seafood.jpg'

const HeaderSearch = (props) => {

   
  return (
    <>
     <div className="bg-grey-500 w-100 flex h-40 md:h-52 lg:h-64 justify-center mx-auto"> 
       
       { props.item === 'search' ? <img src={img} alt="img" className="w-full h-100 object-cover"/> :
         <img src={seafood} alt="img" className="w-full h-100 object-cover"/>
       }

    </div> 
     </>
  )
}

export default HeaderSearch
