import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-screen md:h-screen p-2 flx items-center py-16 bg-[#70877F]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#ffffff] '>About</p>
                <h2 className='py-4 text-slate-950 font-extrabold'>Who I am</h2>
                <p className='py-2 text-white'>My name is Liam, I’m a passionate creative whose love for storytelling manifests itself in various digital mediums. With every project, I strive to not only capture the attention of my audiences, but to make meaningful connections and opportunities in the process.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out m work</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-[#EF946C] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500'>
                <img className='rounded-xl' src='https://source.unsplash.com/dS-q7-zkD9c' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About