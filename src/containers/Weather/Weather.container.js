import React from 'react'

import '../../App.scss'

import { getWeatherIcon } from '../../functions/getWeatherIcons'

import { CurrentWeather } from './components/CurrentWeather.component'
import { Title } from '../../components/Title/Title.component';
import { WeekSummary } from './components/WeekSummary.component';
import NextDay from './components/NextDay.component';


const Weather = ({ weatherForecast }) => {

  const datetoDisplay = (Unixdate) => {
    const newDate = new Date(Unixdate * 1000)
    var options = { weekday: 'long'};
    return newDate.toLocaleDateString('fr-FR', options)
  }

  return (
    <div className="center">
      <div className="fl w-50-l w-100 pt4 mb5">
        <div className="w-90 w-50-m center">
          <Title text="Météo" />
        </div>
        <div className="w-90 w-50-m w-70-l center">
          <WeekSummary weatherForecast={weatherForecast} />
          <CurrentWeather
            day={datetoDisplay(weatherForecast.currently.time)}
            icon={getWeatherIcon(weatherForecast.currently.icon)}
            temp={weatherForecast.currently.temperature.toFixed(0)}
            weatherForecast={weatherForecast}
          />
          <div className="fl w-100 w-50-ns">
            <NextDay weatherForecast={weatherForecast.daily.data[1]} />
          </div>
          <div className="fl w-100 w-50-ns">
            <NextDay weatherForecast={weatherForecast.daily.data[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather