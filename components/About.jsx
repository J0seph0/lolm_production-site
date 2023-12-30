import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-screen md:h-screen flex items-center bg-[#70877F]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 justify-center">
        <div className="col-span-2">
          <h2 className="py-4 text-[#37355A] font-extrabold">Who I am</h2>
          <p className="py-2 px-1 text-[#ffffff] font-sans text">
            My name is Liam, I’m a passionate creative whose love for
            storytelling manifests itself in various digital mediums. With every
            project, I strive to not only capture the attention of my audiences,
            but to make meaningful connections and opportunities in the process.
            </p>
            <p className="py-2 px-1 text-[#ffffff] font-sans text">
            My journey into the world of filmmaking began working on goofy video
            projects in my middle school Spanish class of all places. I learned
            I could create emotional responses with just a camera and a story.
            Since then, I’ve built upon my skills first studying at the
            prestigious Colorado Film School. In due course I’ve had the
            opportunity to grow as an individual in the world of large budget
            video production agencies, all along the way learning from some of
            the industry’s finest. My experience has equipped me to tackle any
            project that comes my way.
            </p> 
            <p className="py-2 px-1 text-[#ffffff] font-sans text">
            The future holds endless possibilities,
            and I'm excited to continue my cinematic journey, collaborating with
            fellow creatives, and bringing captivating stories to life. Join me
            on this adventure, as we dive into the depths of human emotions and
            the infinite realms of imagination through the magic of filmmaking.
          </p>
          <Link href="/#skills">
            <p className="py-2 text-[#37355A] text-xl underline cursor-pointer">
              Services
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-[5px_10px_60px_5px_rgba(55,52,90,1)] rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-500">
          <Image
            src="/portrait.jpg"
            alt="Picture of Liam"
            width="640"
            height="300"
            className="rounded-xl w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
