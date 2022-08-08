import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Intructions = () => {

  const {someData} = useOutletContext();

  return (
<div className='mx-3 text-justify'> 
      {someData.map((d) => 
    <p className='my-3 text-justify'> {d} </p>
      )}
</div>
  )
}

export default Intructions
