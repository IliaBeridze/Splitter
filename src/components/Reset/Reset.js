import './Reset.css'
import React, { useContext } from 'react'
import { MyContext } from '../context/Context'

export default function Reset() {
  const context= useContext(MyContext)
  return (
    <div>
      <button className='reset-btn' onClick={context.resetAll}>
        RESET
      </button>
    </div>
  )
}
