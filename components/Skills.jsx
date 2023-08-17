import React from 'react'
import Image from 'next/image'
import styles from './skills.module.css'

function Skills() {
  return (
    <div id='skills' className="w-screen md:h-screen p-2 flex items-center py-16 bg-[#A8DADC]">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 justify-center">

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:-rotate-180 ease-in duration-500">
          <img
            className="rounded "
            src="https://source.unsplash.com/LNerv625wis"
          />
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:rotate-180 ease-in duration-500">
          <img
            className="rounded "
            src="https://source.unsplash.com/LNerv625wis"
          />
        </div>

        <div>

        </div>

      </div>
    </div>
  );
}

export default Skills