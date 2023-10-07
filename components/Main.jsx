import React from "react";
import Draggable from "react-draggable";
import Eyeglass from "./Eyeglass";

const Main = () => {
  return (
    <div id="home" className="w-screen h-screen text-center">
      <div className="max-w-[1240px] w-full h-full flex">
        <div className="justify-center">
        <iframe
          src="https://player.cloudinary.com/embed/?public_id=lhbum02rgwk86q1xwbg6&cloud_name=dpjdta2yo&player[controls]=false&player[muted]=true&player[hideContextMenu]=false&player[floatingWhenNotVisible]=false&player[autoplay]=true"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          width='1920'
          height='1080'
          frameborder="0"
          className=""
          id="logoiframe"
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Main;