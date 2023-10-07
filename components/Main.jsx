import React from 'react'
import Draggable from 'react-draggable'
import Eyeglass from './Eyeglass'
import video from '/public/roundglass_logo.mp4'

const Main = () => {



  return (
    <div id='home' className='w-screen h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full flex'>
      <video>
        <source src="/public/roundglass_logo.mp4" />
      </video>
      </div>
    </div>
  )
}

export default Main