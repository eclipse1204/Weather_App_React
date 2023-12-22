import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navbar() {

  const {yourWeather,setYourWeather,handleClick}=useContext(AppContext);

  return (
    <div>
      <h1 className='text-center uppercase pt-[20px] text-[2em] font-semibold'>Weather App</h1>
        <div className='w-[90%] flex max-w-[550px] my-0 mx-auto mt-[4rem] justify-between' >
        <NavLink to={"/"}>
          <button onClick={handleClick} className={`cursor-pointer text-[0.875rem] tracking-[1.75px] py-[5px] px-[8px] ${ yourWeather && "bg-gray-400 rounded-[4px]" }`}>Your Weather</button>
        </NavLink>
        <NavLink to={"/search"}>
          <button onClick={handleClick} className={`cursor-pointer text-[0.875rem] tracking-[1.75px] py-[5px] px-[8px] ${ !yourWeather && "bg-gray-400 rounded-[4px]" }`}>Search Weather</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Navbar