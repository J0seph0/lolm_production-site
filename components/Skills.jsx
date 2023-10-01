import React from "react";
import Image from "next/image";
import styles from "./skills.module.css";

//head this with project -> services

function Skills() {
  return (
    <div
      id="skills"
      className="w-screen md:h-auto p-2 flex items-center py-16 bg-[#37355A]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 grid-rows-3 gap-8 justify-center grid-cols-[auto_minmax(0,_1fr)]">
      <h2 className="grid-cols-[auto]">Services</h2>
      <div></div>
        <div className="w-full h-auto m-auto shadow-l shadow-[#EF946C] rounded-xl flex items-center justify-center p-4 ease-in duration-500">
          <iframe
            src="https://player.vimeo.com/video/866193669?h=2a9dbcdd3f"
            width="640"
            height="300"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="">
          <h2 className="text-[#EF946C] ">Video production</h2>
          <p className="text-[#70877F] py-10">
            Unlock the full potential of visual storytelling with comprehensive
            video production services. From concept to final cut, utilize a
            complete suite of creative and technical solutions to bring your
            ideas to life on screen. Whether you need compelling corporate
            videos, engaging promotional content, documentary-style
            storytelling, or any other video production needs, transform your
            vision into captivating, cinematic reality. Deliver videos that
            inspire, inform, and leave a lasting impression. Let's collaborate
            and create visual experiences that truly shine.
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-s shadow-[#EF946C] rounded-xl flex items-center justify-center p-4 ease-in duration-500">
          <iframe
            className="rounded-xl"
            src="https://player.vimeo.com/video/778298765?h=8734ea65c5"
            width="640"
            height="300"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h2 className="text-[#EF946C]">Post-production</h2>
          <p className="text-[#70877F] py-10">
            Take your video content to the next level with professional
            post-production services. Take advantage of a range of services,
            including video editing, color correction, sound design, logo
            animation, and more to enhance and polish your footage, ensuring it
            reaches its full potential. With a commitment to quality and a keen
            eye for detail, we transform your visuals into compelling, seamless,
            and impactful videos that stand out. Let's give your videos the
            final flourish they deserve.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
