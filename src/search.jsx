import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './search.css';

export default function Search ({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "b2eb5470e03070e799f1a04f9e77eb19"
    let getWeatherInfo = async (city) => {
        try{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        
   
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result ={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description
    }
    console.log(result);
    return result;} catch(err){
       setError("no such place in our Api");
    }
}
    let[city,setCity]= useState('');
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
     let newinfo=  await getWeatherInfo(city);
updateInfo(newinfo);
    }
  return(
    <div className="search">
        
        <form onSubmit={handleSubmit}>
           <TextField id="outlined-basic" label="City" 
           variant="outlined" required
           value={city} 
           onChange={handleChange}/>
           <br></br><br></br>
           <Button variant="contained" type='submit' >
  Search
</Button>
        </form>
    </div>
  )
    
}