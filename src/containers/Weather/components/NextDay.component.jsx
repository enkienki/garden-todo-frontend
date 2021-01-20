import React from 'react'

import '../../../App.scss'

import { getWeatherIcon } from '../../../functions/getWeatherIcons'
import { Summary } from './Summary.component';


const NextDay = ({ weatherForecast }) => {

  const datetoDisplay = (Unixdate) => {
    const newDate = new Date(Unixdate * 1000)
    var options = { weekday: 'long' };
    return newDate.toLocaleDateString('fr-FR', options)
  }

  const HourtoDisplay = (Unixdate) => {
    const newDate = new Date(Unixdate * 1000)
    return newDate.getHours()
  }

  return(
    <div className="bg-card br3 pa2 ma2 h5 ">
      <div className="w-40 f3 b font-green pb2">
        {datetoDisplay(weatherForecast.time)}
      </div>
      <Summary summary={weatherForecast.summary} />
      <div className="flex justify-center pa3">
        <div className="flex flex-column items-center">
          <span className="font-green b">{weatherForecast.temperatureLow.toFixed(0)}℃</span>
          <span>{HourtoDisplay(weatherForecast.temperatureLowTime)}h</span>
        </div>
        <span className="b ml3 mr3"> → </span>
        <div className="flex flex-column items-center">
          <span className="font-green b">{weatherForecast.temperatureHigh.toFixed(0)}℃</span>
          <span>{HourtoDisplay(weatherForecast.temperatureHighTime)}h</span>
        </div>
      </div>
      <div className="flex justify-around">
        <img src={getWeatherIcon(weatherForecast.icon)} style={{ color: "#f5f5f5" }} width="50" alt="" />
      
      {
          ((weatherForecast.precipIntensity) * 24).toFixed(1) > 0.5
          ? <div className='flex flex-column items-center justify-center'>
            <img src={getWeatherIcon("raindrop")} style={{ color: "#f5f5f5" }} width="30" alt="" />
              <span className='font-blue b'>
                {((weatherForecast.precipIntensity) * 24).toFixed(1)} mm
            </span>
          </div>
          : null
      }
      </div>
    </div>
  )
}

export default NextDay