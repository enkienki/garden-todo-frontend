import React from 'react'
import SearchIcon from '../../../Icons/svg/magnifying-glass.svg'

const InputComponent = ({ value, handleClick, handleChange }) => {
  return(
    <div>
      <img src={SearchIcon} alt="search" width="15px" />
      <input
        className="bg-transparent near-white bt-0 bl-0 br-0 pl2 pt2 pb2 b w-90 input"
        placeholder="Rechercher un lieu"
        type="text"
        value={value}
        onClick={handleClick}
        onChange={handleChange}
      />
    </div>
  )
}

export default InputComponent