import Search from "./search"
import InfoBox from "./infoBox"
import { useState } from "react"
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]= useState({
        city:"Delhi",
        feelsLike: 30.11,
        humidity: 81,
        temp: 27.12,
        tempMax: 27.12,
        tempMin: 27.,
        weather:"overcast clouds"
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
       
        <div style={{textAlign:"center"}}>
            <h1>Weather app </h1>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}