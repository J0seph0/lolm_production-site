import React from "react";
import Draggable from "react-draggable";
import Eyeglass from "./Eyeglass";
import { Player } from '@lottiefiles/react-lottie-player';


const Main = () => {
  return (
<div id="home" className="w-screen h-screen md:h-screen flex items-center justify-center bg-[#ffffff]">
      <div className="max-w-[1240px] w-full h-full flex justify-center items-center">
      <Player
        src='https://lottie.host/b6409945-8da7-4c9d-be75-eb2f49127681/aHjFQmoWNt.json'
        className="player w-full h-full m-auto"
        autoplay
        keepLastFrame='true'
      />
      </div>
    </div>
  );
};

export default Main;