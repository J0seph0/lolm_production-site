import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-screen md:h-screen p-2 flx items-center py-16 bg-[#E63946]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#ffffff] '>About</p>
                <h2 className='py-4 text-slate-950 font-extrabold'>Who I am</h2>
                <p className='py-2 text-white'>This is who I am lalalalal</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out m work</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500'>
                <img className='rounded-xl' src='https://source.unsplash.com/dS-q7-zkD9c' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About