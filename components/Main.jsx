import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
          <div>
              <p className='uppercase text-sm tracking-widest text-gray-600'>Nice to see you</p>
              <div className='flex tracking-widest items-start '>
                <div className='w-[374px] h-[374px] rounded-full bg-black'></div>
                <div className='w-[374px] h-[374px] rounded-full bg-black'></div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Main