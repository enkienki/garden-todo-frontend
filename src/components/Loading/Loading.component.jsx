import React from 'react'
import LoadingLogo  from '../../Icons/svg/Rolling-1s-200px.svg'

const LoadingComponent = () => {
  return(
    <div className=" flex items-center justify-center mt5">
      <span className="w-10">
        <img src={LoadingLogo} alt="Loading logo" />
      </span>
    </div>
  )
}

export default LoadingComponent