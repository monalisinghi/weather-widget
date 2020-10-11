import React from "react";
import { displayDistance, displayTemperature, getDayName } from "../utils";

const DayWeather = ({ weather, unit }) => {
  return weather.map((weather, index) => {
    return (
      <div
        className="col-4 col-sm-3 col-md-2 text-center text-wrap"
        key={index}
      >
        <strong className="pb-1 h6">
          {index === 0 ? "Today" : getDayName(weather.applicable_date)}
        </strong>
        <p className="mb-2">
          <span className="sr-only">{weather.weather_state_name}</span>
          <img
            src={`https://www.metaweather.com//static/img/weather/png/${weather.weather_state_abbr}.png`}
            alt={weather.weather_state_name}
            style={{ height: "40px" }}
          />
        </p>
        <p className="mb-0">
          <span className="sr-only">maximum temperature</span>
          <span className="pr-2">
            {displayTemperature(weather.max_temp, unit)}
          </span>
          <span className="sr-only">minimum temperature</span>
          <span className="text-muted" title="minimum temperature">
            {displayTemperature(weather.min_temp, unit)}
          </span>
        </p>
        <p className="mb-5 mb-md-2 text-muted" title="Wind speed and direction">
          <span className="sr-only">wind speed is</span>
          {displayDistance(weather.wind_speed, unit)}{" "}
          <span className="sr-only">wind direction is</span>
          {weather.wind_direction_compass}
        </p>
      </div>
    );
  });
};

export default DayWeather;
