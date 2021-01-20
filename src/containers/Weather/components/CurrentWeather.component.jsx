import React from "react";

import '../../../App.scss'

import { getWeatherIcon } from '../../../functions/getWeatherIcons'

import { Hourly } from './Hourly.component'
import { MoonPhase } from './MoonPhase.component';
import { Summary } from './Summary.component';

export const CurrentWeather = ({ day, icon, temp, weatherForecast }) => {

  const HourtoDisplay = (date) => {
    const newDate = new Date(date * 1000)
    return newDate.getHours()
  }

  return (
    <div className="mv3 bg-card br3 ma2">

      <div className="flex items-center pv3 ph3">
        <div className="w-40 f3 b font-green">
          {day}
        </div>
        <div>
          <img src={icon} style={{ color: "#f5f5f5" }} width="50" alt="" />
        </div>
        <div>
          <span className="b f4 ml4 font-green">
          {temp}℃
        </span>
        </div>
        {
          ((weatherForecast.daily.data[0].precipIntensity) * 24).toFixed(1) > 0.5 
            ? <div className='flex flex-column items-center w-30 pl4'>
                <img src={getWeatherIcon("raindrop")} style={{ color: "#f5f5f5" }} width="30" alt="" />
                <span className='font-blue b'>
                  {((weatherForecast.daily.data[0].precipIntensity) * 24).toFixed(1)}mm
                </span>
              </div>
            : null
        }
      </div>
      
      <div>
        <Summary summary={weatherForecast.currently.summary} />
        <div className="pt2 pb3 flex justify-evenly">
          <MoonPhase moonphase={weatherForecast.daily.data[0].moonPhase} />
          <Hourly
            hour={HourtoDisplay(weatherForecast.hourly.data[1].time)}
            icon={getWeatherIcon(weatherForecast.currently.icon)}
            temp={weatherForecast.hourly.data[1].temperature.toFixed(0)}
          />
          <Hourly
            hour={HourtoDisplay(weatherForecast.hourly.data[4].time)}
            icon={getWeatherIcon(weatherForecast.currently.icon)}
            temp={weatherForecast.hourly.data[4].temperature.toFixed(0)}
          />
          <Hourly
            hour={HourtoDisplay(weatherForecast.hourly.data[7].time)}
            icon={getWeatherIcon(weatherForecast.currently.icon)}
            temp={weatherForecast.hourly.data[7].temperature.toFixed(0)}
          />
        </div>
      </div>

    </div>
  );
};
