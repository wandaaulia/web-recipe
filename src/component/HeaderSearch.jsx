import React from 'react'
import img from '../assets/img/dessert.jpg'
import seafood from '../assets/img/seafood.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeaderSearch = (props) => {

  return (
    <>
     <div className="bg-grey-500 w-100 flex h-40 md:h-52 lg:h-64 justify-center mx-auto"> 
       { props.item === 'search' ? 
        <LazyLoadImage alt="img" src={img} className="w-full h-100 object-cover"/>
       :
  <LazyLoadImage alt="img" src={seafood} className="w-full h-100 object-cover"/>

       }

    </div> 
     </>
  )
}

export default HeaderSearch
