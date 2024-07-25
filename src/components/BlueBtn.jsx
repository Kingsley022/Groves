import React from 'react'
import "../styles/BlueBtn.css"

const BlueBtn = ({label, handleClick}) => {
  return (
    <button onClick={handleClick} className='blue-btn'>{label}</button>
  )
}

export default BlueBtn