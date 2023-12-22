import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const ApiKey = import.meta.env.VITE_API_KEY;

export const AppContext=createContext();

export default function AppContextProvider({children})
{
    const location=useLocation();
    const [yourWeather,setYourWeather]=useState(location.pathname.split("/").at(-1)!="search");
    const [loading,setLoading]=useState(true);
    const [locationAccess,setLocationAccess]=useState(sessionStorage.getItem("latitude")!=null);
    const [cityName,setCityName]=useState("");
    const [loading2,setLoading2]=useState(true);
    const [datatoShow,setDatatoShow]=useState(false);
    const [weatherInfo,setWeatherInfo]=useState({
        cityName:"",
        temp:0,
        countryIcon:"",
        desc:"",
        weatherIcon:"",
        windspeed:0,
        humidity:0,
        cloudiness:0
    })

    function handleClick(event)
    {
        if(event.target.innerText==="Your Weather")
        {
            if(yourWeather==false)
            {
                setYourWeather(true);
            }
        }
        else
        {
            if(yourWeather==true)
            {
                setYourWeather(false);
            }
        }
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        if(cityName!="")
        {
            setDatatoShow(true);
            fetchDataCity();
        }
    }

    function handleChange(event)
    {
        setCityName(event.target.value);
    }

    function getLocation()
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else
        {
            alert("Geolocation is not supported");
        }
    }

    function showPosition(position) {
        sessionStorage.setItem("latitude", position.coords.latitude);
        sessionStorage.setItem("longitude", position.coords.longitude);
        setLocationAccess(true);
        fetchData();
    }

    async function fetchData()
    {
        setLoading(true);
        let latitude=sessionStorage.getItem("latitude");
        let longitude=sessionStorage.getItem("longitude");
        console.log("LAT "+latitude);
        console.log("LONG "+longitude);
        try{
            let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`);
            let result=await response.json();
            console.log(result);
            let newObj={
                cityName:result.name,
                temp:(result.main.temp-273.15).toFixed(2),
                countryIcon:`https://flagcdn.com/144x108/${result?.sys?.country.toLowerCase()}.png`,
                desc:result.weather[0].description,
                weatherIcon:`http://openweathermap.org/img/w/${result?.weather?.[0]?.icon}.png`,
                windspeed:result.wind.speed,
                humidity:result.main.humidity,
                cloudiness:result.clouds.all,
            }
            setWeatherInfo(()=>{
                return newObj;
            })
            
        }
        catch(e)
        {
            alert("ERROR");
            console.log("ERROR");
            console.log(e);
        }
        setLoading(false);
    }

    async function fetchDataCity()
    {
        setLoading2(true);
        try{
            let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`);
            let result=await response.json();
            console.log(result);
            let newObj={
                cityName:result.name,
                temp:(result.main.temp-273.15).toFixed(2),
                countryIcon:`https://flagcdn.com/144x108/${result?.sys?.country.toLowerCase()}.png`,
                desc:result.weather[0].description,
                weatherIcon:`http://openweathermap.org/img/w/${result?.weather?.[0]?.icon}.png`,
                windspeed:result.wind.speed,
                humidity:result.main.humidity,
                cloudiness:result.clouds.all,
            }
            setWeatherInfo(()=>{
                return newObj;
            })
            
        }
        catch(e)
        {
            alert("ERROR");
            console.log("ERROR");
            console.log(e);
            setDatatoShow(false);
        }
        setLoading2(false);
    }

    const value={
        yourWeather,
        setYourWeather,
        handleClick,
        getLocation,
        locationAccess,
        loading,
        weatherInfo,
        fetchData,
        cityName,
        setCityName,
        handleSubmit,
        loading2,
        setLoading2,
        handleChange,
        datatoShow,
        setDatatoShow,
        fetchDataCity,
        setLocationAccess,
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}