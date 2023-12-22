import React, { useContext } from 'react'
import image from '../assets/Images/location.png';
import { AppContext } from '../context/AppContext';

function GrantLocation() {
  const {getLocation}=useContext(AppContext);
  
  return (
    <div className='flex flex-col items-center my-[4rem] mx-0'>
        <img className='mb-[2rem]' src={image} width="80" height="80" loading="lazy"/>
        <p className='text-[1.75rem] font-semibold'>Grant Location Access</p>
        <p className='text-[0.85rem] font-semibold mt-[0.75rem] mb-[1.75rem] tracking-[0.75px]'>Allow Access to get weather information</p>
        <button onClick={getLocation} className='text-[0.85rem] uppercase rounded-[5px] bg-Dark2 cursor-pointer py-[10px] px-[30px] mb-[10px]'>Grant Access</button>
    </div>
  )
}

export default GrantLocation