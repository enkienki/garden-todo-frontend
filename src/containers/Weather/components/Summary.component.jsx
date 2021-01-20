import React from 'react'

import '../../../App.scss'

export const Summary = ({ summary }) => {
  return (
    <div className='pb3'>
      <div className="tc i">{summary}</div>
    </div>
  );
}
