import Moon from '../Icons/svg/wi-moon-full.svg'
import Sun from '../Icons/svg/wi-day-sunny.svg'
import PartlyCloudyDay from '../Icons/svg/wi-day-cloudy.svg'
import PartlyCloudyNight from '../Icons/svg/wi-night-alt-cloudy.svg'
import Cloudy from '../Icons/svg/wi-cloudy.svg'
import Rain from '../Icons/svg/wi-rain.svg'
import Sleet from '../Icons/svg/wi-sleet.svg'
import Snow from '../Icons/svg/wi-snow.svg'
import Wind from '../Icons/svg/wi-windy.svg'
import Fog from '../Icons/svg/wi-fog.svg'
import Raindrop from '../Icons/svg/wi-raindrop.svg'


export const getWeatherIcon = (icon) => {
  switch (icon) {
    case "clear-day":
      return Sun
    case "clear-night":
      return Moon
    case "partly-cloudy-day":
      return PartlyCloudyDay
    case "partly-cloudy-night":
      return PartlyCloudyNight
    case "cloudy":
      return Cloudy
    case "rain":
      return Rain
    case "sleet":
      return Sleet
    case "snow":
      return Snow
    case "wind":
      return Wind
    case "fog":
      return Fog
    case "raindrop":
      return Raindrop
    default:
      return Sun
  }
}