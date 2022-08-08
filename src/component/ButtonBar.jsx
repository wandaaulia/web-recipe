import React from 'react'
import ButtonFavNew from './ButtonFavNew'

const ButtonBar = (props) => {

  return (
    <>
    <a href={props.item } target="_blank" className="flex justify-center items-center mr-3 text-sm bg-red-400 text-white px-0 w-1/2 py-3 text-center  md:px-6 md:py-1 rounded-full" rel="noreferrer"> Watch Tutorial </a> 
 <ButtonFavNew idMeal={props.idMeal} strMealThumb={props.strMealThumb} strMeal={props.strMeal}/> 
    </>
  )
}

export default ButtonBar
