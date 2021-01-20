import React from 'react'

const Errors = ({ errors }) => {
  return(
    <div className="flex justify-center">
      <p className="w-30-ns w-75 bg-red br3 pa2 tc">{errors}</p>
    </div>
  )
}

export default Errors