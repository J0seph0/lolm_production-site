import React from 'react'
import Draggable from 'react-draggable'
import Eyeglass from './Eyeglass'

const Main = () => {



  return (
    <div id='home' className='w-screen h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full flex'>
          <div className='py-[100px] px-[50px]'>
            <h1 className='text-[100px]'>Round</h1>
            <h1 className='text-[100px]'>Glass</h1>
            <h1 className='text-[100px]'>Media</h1>
          </div>
          <div className=''>
            <p>
            Explain text
            </p>
          </div>
      </div>
    </div>
  )
}

export default Main