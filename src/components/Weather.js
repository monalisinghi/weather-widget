import React from "react";
import {
  humanReadableDate,
  displayTemperature,
  displayDistance,
} from "../utils";
import DayWeather from "./DayWeather";

const Weather = ({ weather, onToggle, unit }) => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <span className="sr-only">City</span>
          <h1 className="mb-0 display-4">{weather.title}</h1>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              defaultChecked={unit}
              onChange={(e) => onToggle(e.target.checked)}
              id="unitSwitch"
            />
            <span className="sr-only">Unit in</span>
            <label className="custom-control-label" htmlFor="unitSwitch">
              {unit ? "Metric" : "Imperial"}
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="mb-0 text-muted">
            <span className="sr-only">Today's date is</span>
            {humanReadableDate(weather.consolidated_weather[0].applicable_date)}
          </p>
          <p className="text-muted">
            <span className="sr-only">Today's weather forecast is</span>
            {weather.consolidated_weather[0].weather_state_name}
          </p>
          <p className="mb-0">
            <img
              src={`https://www.metaweather.com//static/img/weather/png/${weather.consolidated_weather[0].weather_state_abbr}.png`}
              alt={weather.weather_state_name}
              style={{ height: "60px" }}
            />
            <span className="h2 d-inline-flex align-middle pl-3 text-primary">
              <span className="sr-only">Temperature is</span>
              {displayTemperature(
                weather.consolidated_weather[0].the_temp,
                unit
              )}
            </span>
          </p>
        </div>
        <div className="col-6">
          <p className="mb-0 d-flex">
            <span className="order-2">
              {displayTemperature(
                weather.consolidated_weather[0].min_temp,
                unit
              )}
            </span>
            <span className="text-muted order-1 pr-1">Minimum:</span>
          </p>
          <p className="mb-0 d-flex">
            <span className="order-2">
              {displayTemperature(
                weather.consolidated_weather[0].max_temp,
                unit
              )}
            </span>
            <span className="text-muted order-1 pr-1">Maximum:</span>
          </p>
          <p className="mb-0 d-flex">
            <span className="order-2">
              {weather.consolidated_weather[0].humidity}%
            </span>
            <span className="text-muted order-1 pr-1">Humidity:</span>
          </p>
          <p className="mb-0 d-flex">
            <span className="order-2">
              {displayDistance(
                weather.consolidated_weather[0].wind_speed,
                unit
              )}{" "}
              {weather.consolidated_weather[0].wind_direction_compass}
            </span>
            <span className="text-muted order-1 pr-1">Wind:</span>
          </p>
        </div>
      </div>
      <div className="row mt-4 pt-4 border-top">
        <span className="sr-only">Forecast for the week is</span>
        <DayWeather weather={weather.consolidated_weather} unit={unit} />
      </div>
      <div className="row mt-4 pt-1 border-top">
        <div className="col-12">
          <p className="text-center mb-0">
            <small className="text-muted">
              Weather data is provided by{" "}
              <a
                href="https://www.metaweather.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Metaweather
              </a>
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Weather;
