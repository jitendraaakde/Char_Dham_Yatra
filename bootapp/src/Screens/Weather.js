import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=8271fbc795c6497aa8352836232303&q=Kedarnath&aqi=no`);
            setWeatherData(response.data);
            console.log(response.data);

        
        };

        fetchData();
    }, []);
  return (
    <>
      <h1>weather</h1>
      <div>
      {weatherData && (
        <div>
          <p>City: {weatherData.location.name}</p>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Description: {weatherData.current.condition.text}</p>
          <p>Description: {weatherData.current.condition.icon}</p>
        </div>
      )}
    </div>
    </>
  )
}
