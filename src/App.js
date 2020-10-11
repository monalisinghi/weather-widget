import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import Weather from "./components/Weather";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isMetric, setIsMetric] = useState(true);

  const watch = true;
  const { latitude, longitude, error } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  /*
   * useEffect hook will fetch location and weather data if user's location coords are available.
   * */
  useEffect(() => {
    if (latitude && !error) {
      fetch(
        `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`
      )
        .then((response) => response.json())
        .then((locations) => {
          // setWeatherData(results[0].woeid);
          fetch(
            `https://www.metaweather.com/api/location/${locations[0].woeid}/`
          )
            .then((response) => response.json())
            .then((weather) => {
              setWeatherData(weather);
              setIsLoading(false);
            })
            .catch((error) => console.log("Error: ", error));
        })
        .catch((error) => console.log("Error: ", error));
    }
  }, [latitude, longitude, error]);

  // Handles Unit toggle switch
  const onToggle = (value) => {
    setIsMetric(value);
  };

  return (
    <div className="container border rounded-lg mt-2 shadow-sm">
      {isLoading && !error && (
        <div className="row">
          <div className="col-12">
            <div className="p-4 text-center">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && !error && (
        <div className="row">
          <div className="col-12">
            <div className="py-2">
              <Weather
                weather={weatherData}
                onToggle={onToggle.bind(this)}
                unit={isMetric}
              />
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="row mt-3">
          <div className="col-12">
            <div className="alert alert-danger" role="alert">
              Something went wrong, please try again later!!!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
