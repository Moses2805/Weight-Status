import React from 'react'

export const Buttons = ({resetButton}) => {
  return (
    <div><button onClick={resetButton} className="btn btn-danger mt-2">Reset</button></div>
  )
}
