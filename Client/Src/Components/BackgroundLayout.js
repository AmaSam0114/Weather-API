import React, { useEffect, useState } from 'react'

import Cloudy from '../assets/images/Cloudy.jpg'


const BackgroundLayout = () => {

  

  

  return (
    <img src={Cloudy} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout