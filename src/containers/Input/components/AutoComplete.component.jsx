import React from 'react'

const AutoComplete = ({ city, handleClick, selected }) => {
    return (  
        <div
            className={`green pointer hover-bg-light-gray pa2 ${selected ? "bg-light-gray" : "bg-near-white"}`}
            onClick={handleClick}
        >
            {city.place_name}
        </div>
    );
}

export default AutoComplete