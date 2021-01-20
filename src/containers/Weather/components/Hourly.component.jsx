import React from 'react'

import '../../../App.scss'

export const Hourly = ({ hour, icon, temp }) => {
  return (
    <div className='flex flex-column items-center'>
      <div className='pb2'>{hour}h</div>
      <img src={icon} width="40" alt="" />
      <span className="b pt2 font-green">{temp}℃</span>
    </div>
  );
}
