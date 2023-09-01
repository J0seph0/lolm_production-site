import React from 'react'
import Draggable from 'react-draggable'
import Eyeglass from './Eyeglass'

const Main = () => {



  return (
    <div id='home' className='w-screen h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
          <div>
              <p className='uppercase text-sm tracking-widest text-gray-600'>Nice to see you</p>
              <Draggable>
                <div className='flex tracking-widest items-start gap-2'>
                  <div className='w-[374px] h-[374px] rounded-full bg-black'></div>
                  <div className='w-[374px] h-[374px] rounded-full bg-black'></div>
                </div>
              </Draggable>
          </div>
      </div>
    </div>
  )
}

export default Main