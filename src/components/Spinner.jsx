import React from 'react';
import image from '../assets/Images/loading.gif'

function Spinner() {
  return (
    <div className="flex flex-col items-center my-[4rem] mx-0">
        <img src={image} width="150" height="150"></img>
        <p className='uppercase'>Loading</p>
    </div>
  )
}

export default Spinner