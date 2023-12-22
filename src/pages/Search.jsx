import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import search from '../assets/Images/search.png'
import { AppContext } from '../context/AppContext';
import WeatherInfo from '../components/WeatherInfo';
import Spinner from '../components/Spinner';

function Search() {
  const {handleSubmit,loading2,cityName,handleChange,datatoShow}=useContext(AppContext);
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex flex-col justify-center items-center mt-[4rem]'>
          <form onSubmit={handleSubmit} className='flex max-w-[550px] w-[90%] my-0 mx-auto items-center justify-center gap-y-0 gap-x-[10px]'>
              <input onChange={handleChange} className='w-[calc(100%-80px)] h-[40px] py-0 px-[20px] bg-[rgba(213,226,239,0.5)] rounded-[10px] placeholder-[rgba(255,255,255,0.7)] focus:outline-[rgba(255,255,255,0.7)] focus:border-opacity-70 focus:outline-[3px]' placeholder="Search for City...." value={cityName}/>
              <button className='w-[40px] h-[40px] flex items-center justify-center rounded-[50%] mb-[1px] text-[0.85rem] uppercase bg-Dark2 cursor-pointer'>
                  <img src={search} loading="lazy" width="20" height="20" alt=""/>
              </button>
          </form>
        </div>
        {
          datatoShow && (loading2 ? (<Spinner></Spinner>):(<WeatherInfo></WeatherInfo>))
        }
    </div>
  )
}

export default Search;