import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar';
import GrantLocation from '../components/GrantLocation';
import WeatherInfo from '../components/WeatherInfo';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';

function Home() {
  const {locationAccess,loading,fetchData,setDatatoShow}=useContext(AppContext);
  
  useEffect(()=>{
    setDatatoShow(false);
    if(locationAccess)
    {
      fetchData();
    }
  },[])

  return (
    <div>
        <Navbar></Navbar>
        {
          locationAccess? ( loading ? (<Spinner></Spinner>):(<WeatherInfo></WeatherInfo>)) : (<GrantLocation></GrantLocation>)
        }
    </div>
  )
}

export default Home