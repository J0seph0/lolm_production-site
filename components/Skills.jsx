import React from 'react'
import Image from 'next/image'
import styles from './skills.module.css'

function Skills() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 bg-[#A8DADC]">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 justify-center">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
          <img
            className="rounded "
            src="https://source.unsplash.com/LNerv625wis"
          />
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
          <img
            className="rounded "
            src="https://source.unsplash.com/LNerv625wis"
          />
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p classNames="title">FLIP CARD</p>
              <p>Hover Me</p>
            </div>
            <div className="flip-card-back">
              <p class="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills