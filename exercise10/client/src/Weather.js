import {React, useState, useEffect} from 'react'
import './Weather.css'

const Weather = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [data, setData] = useState(false);

  // const zip = "92130";
  // const country = "US";
  const apiKey = "0512bc2b6cb6b8b0dd36e107685ad4c9"

  // useEffect(() => {
  //   // start the fetching
  //   fetch(
  //     `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((actualData) => console.log(actualData))
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []); // no callback statement within the useEffect means that the embedded function will only run once; when the DOM was loaded!
  
  const lat = 32.9555;
  const lon = -117.2252;

  function kelvinToCelsius(temp) {
    return Math.round(temp - 273.15);
  }

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
      // handling responses
      .then((response) => response.json())
      // handling normal data state
      .then((actualData) => {
        setLoadingData(false);
        setError(false);
        setData(actualData);
      })
      // handling errors
      .catch((err) => {
        // console.log(err.message);
        setLoadingData(false);
        setError(true);
      });
  }, []);
  
  return (
    <div className="weather">
      {loadingData && <p>Loading...</p>}
      {error && <p>Error fetching weather data</p>}
      {!loadingData && !error && data && (
        <>
          Weather info for {data.name}
          <br />
          Temperature: {kelvinToCelsius(data.main.temp)}&deg;C
          <br />
          Minimum Temperature: {kelvinToCelsius(data.main.temp_min)}&deg;C
          <br />
          Maxiumum Temperature: {kelvinToCelsius(data.main.temp_max)}&deg;C
          <br />
          Description: {data.weather[0].description}
          <br />
          Wind
          <br />
          Speed: {data.wind.speed}
          <br />
          Degree: {data.wind.deg}

        </>
      )}
    </div>
  );
};

export default Weather