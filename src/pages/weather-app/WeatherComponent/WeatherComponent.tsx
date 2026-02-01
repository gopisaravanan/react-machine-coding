import { useState, useEffect } from "react";

const WeatherComponent = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      "https://mocki.io/v1/2f766377-7427-4c52-bf49-904fcc37993c",
    );
    const data = await response.json();
    console.log(response);
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <h3>Weather App</h3>
      <div>
        {Object.entries(data).map(([city, info]) => (
          <div>
            <h3>{city}</h3>
            <p>Temp: {info.temperature}°C</p>
            <p>Condition: {info.condition}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherComponent;
