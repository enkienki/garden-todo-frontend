import React from 'react'

import '../../../App.scss'

import FullMoon from '../../../Icons/svg/wi-moon-full.svg'
import NewMoon from '../../../Icons/svg/wi-moon-new.svg'
import WaningMoon from '../../../Icons/svg/wi-moon-alt-waning-gibbous-4.svg'
import WaxingMoon from '../../../Icons/svg/wi-moon-alt-waxing-crescent-4.svg'

export const MoonPhase = ({ moonphase }) => {

  if (moonphase === 0.00) {  
    return (
      <div className="flex flex-column items-center justify-center">
        <img src={NewMoon} width="30" alt="" />
        <div className="f5 tc">Nouvelle lune</div>
      </div>
    )
  }
  if (moonphase > 0 && moonphase < 0.50) {
    return (
      <div className="flex flex-column items-center justify-center">
        <img src={WaxingMoon} width="30" alt="" />
        <div className="f5 tc">Lune montante</div>
      </div>
    );
  }
  if (moonphase === 0.50) {
    return (
      <div className="flex flex-column items-center justify-center">
        <img src={FullMoon} width="30" alt="" />
        <div className="f5 tc">Pleine lune</div>
      </div>
    );
  }
  if (moonphase > 0.50 && moonphase <= 1) {
    return (
      <div className="flex flex-column items-center justify-center mw3 ma3">
        <img src={WaningMoon} width="40" alt="" />
        <div className="f5 tc">Lune déscendante</div>
      </div>
    );
  }
}
