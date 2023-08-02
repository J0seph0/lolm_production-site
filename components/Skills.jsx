import React from 'react'
import Image from 'next/image'

function Skills() {
  return (
<div className='w-full md:h-screen p-2 flx items-center py-16 bg-[#A8DADC]'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div>
          <div>
            <Image
                  alt="/" 
                  width='125' 
                  height='50'src='/../public/assets/skills/mongo.png' 
                />
          </div>
      </div>
    </div>
</div>
  )
}

export default Skills