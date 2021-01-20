import React from 'react'

export const Title = ({ text, children }) => {
  return (
    <div className="f3 mt4 mb3 b">
      {text}
      {children}
    </div>
  );
}