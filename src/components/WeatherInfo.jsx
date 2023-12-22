import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import wind from '../assets/Images/wind.png'
import humidity from '../assets/Images/humidity.png'
import cloud from '../assets/Images/cloud.png'

function WeatherInfo() {
  const {weatherInfo}=useContext(AppContext);
  return (
    <div className='flex flex-col items-center justify-center max-w-[1000px] w-[90%] mx-auto my-[4rem]'>
        <div className='flex items-center gap-y-0 gap-x-[0.5rem] mb-[1rem]'>
            <p className='text-[2rem]'>{weatherInfo.cityName}</p>
            <img className='w-[30px] h-[30px]' src={weatherInfo.countryIcon}/>
        </div>
        <p className='text-[1.5rem] font-extralight uppercase'>{weatherInfo.desc}</p>
        <img className='w-[90px] h-[90px]' src={weatherInfo.weatherIcon}/>
        <p className='text-[2.75rem] font-bold'>{weatherInfo.temp+" °C"}</p>
        <div className='flex gap-y-[10px] gap-x-[20px] justify-center items-center mt-[2rem] self-stretch'>
            <div className='flex flex-col w-[30%] max-w-[200px] rounded-[5px] p-[1rem] items-center bg-[rgba(213,226,239,0.5)]'>
                <img className='w-[50px] h-[50px]' src={wind}/>
                <p className='text-[1.15rem] font-semibold uppercase'>Windspeed</p>
                <p className='text-[1rem] font-extralight'>{weatherInfo.windspeed+" m/s"}</p>
            </div>
            <div className='flex flex-col w-[30%] max-w-[200px] rounded-[5px] p-[1rem] items-center bg-[rgba(213,226,239,0.5)]'>
                <img className='w-[50px] h-[50px]' src={humidity}/>
                <p className='text-[1.15rem] font-semibold uppercase'>Humidity</p>
                <p className='text-[1rem] font-extralight'>{weatherInfo.humidity+" %"}</p>
            </div>
            <div className='flex flex-col w-[30%] max-w-[200px] rounded-[5px] p-[1rem] items-center bg-[rgba(213,226,239,0.5)]'>
                <img className='w-[50px] h-[50px]' src={cloud}/>
                <p className='text-[1.15rem] font-semibold uppercase'>Clouds</p>
                <p className='text-[1rem] font-extralight'>{weatherInfo.cloudiness+" %"}</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo