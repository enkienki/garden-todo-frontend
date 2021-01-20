import React from 'react'

import '../../../App.scss'

export const WeekSummary = ({ weatherForecast }) => (
  <div className="br3 pa2 i tc ma1">
    <div>{weatherForecast.daily.summary}</div>
  </div>
)