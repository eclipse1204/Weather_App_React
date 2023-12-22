import React from 'react'
import image from '../assets/Images/not-found.png'

function Error() {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <img className='w-[400px] h-[400px]' src={image} alt="" />
    </div>
  )
}

export default Error