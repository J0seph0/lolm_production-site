import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flx items-center py-16 bg-[#E63946]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#ffffff] '>About</p>
                <h2 className='py-4 text-slate-950 font-extrabold'>Who I am</h2>
                <p className='py-2 text-white'>This is who I am lalalalal</p>
            </div>
            <div>
                <img src='' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About