import React from 'react'

export const Inputs = (props) => {
  return (
    <div>
    <h6>Add your {props.metric}</h6>
    <input onChange={props.fun} type="number" value={props.value}/>
    </div>
  )
}
