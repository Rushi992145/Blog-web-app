import React from 'react'
import LOGO from '../assets/Blog-logo.png'

function Logo({width = '100px'}) {
  return (
    <div className='w-[40px]'>
      <img src={LOGO} alt="LOGO" />
    </div>
  )
}

export default Logo
