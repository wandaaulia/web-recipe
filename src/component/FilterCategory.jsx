import React from 'react'


const FilterCategory = (props) => {

  return (
    <>

      <div className={props.color} key={props.index}
      onClick={props.onClick}
      > 
        {props.item}
    </div> 
      

  
  
    </>
  )
}

export default FilterCategory
