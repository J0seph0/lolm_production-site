import React from "react";
import ReactPlayer from 'react-player'
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';

//head this with project -> services

function Skills() {

  const [ref, inView] = useInView({
    triggerOnce: false, // Change to false if you want the animation to trigger again whenever it comes in view
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false, // Change to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <div
      id="skills"
      className="w-screen md:h-auto p-0 flex-row items-center py-16 bg-[#37355A]"
    >
      <h1 className="ml-[12%] mb-10 text-[#EF946C]">Services</h1>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 grid-rows-2 gap-8">
          
          <div className="flex items-center justify-center">
          <div className="relative w-[69%] h-[100%] md:w-[77.33%] md:h-[90.33%]">
          <iframe
            className="w-full h-full shadow-lg shadow-[#EF946C] rounded-xl"
            src="https://player.vimeo.com/video/866193669?h=2a9dbcdd3f"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture"
          />
          </div>
          </div>
        <div className="overflow-hidden">
          <motion.h2 
            className="text-[#EF946C] ml-1 mt-5"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 1}}
          >
            Video production
            </motion.h2>

          <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 700 }} 
              animate={{ opacity: inView ? 1 : 0, x: inView ? 1 : 0 }} 
              transition={{ delay: 0.4, duration: 1}}
            >
            <p className="text-[#ffffff] py-5 px-2">
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
          </motion.div>

        </div>
        <div className="flex justify-center items-center">
        <div className="flex relative w-[69%] h-[100%] md:w-[77.33%] md:h-[90.33%]">
          <iframe
            className="rounded-xl shadow-lg shadow-[#EF946C]"
            src="https://player.vimeo.com/video/778298765?h=8734ea65c5"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        </div>
        <div className="overflow-hidden">
          <motion.h2 
            className="text-[#EF946C] ml-1 mt-5"
            ref={ref2}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView2 ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 1}}
          >
            Post-production
            </motion.h2>
          <motion.p
              className="text-[#ffffff] py-5 px-2"
              ref={ref2}
              initial={{ opacity: 0, x: 700 }} 
              animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 1 : 0 }} 
              transition={{ delay: 0.4, duration: 1}}
            >
            Take your video content to the next level with professional
            post-production services. Take advantage of a range of services,
            including video editing, color correction, sound design, logo
            animation, and more to enhance and polish your footage, ensuring it
            reaches its full potential. With a commitment to quality and a keen
            eye for detail, we transform your visuals into compelling, seamless,
            and impactful videos that stand out. Let's give your videos the
            final flourish they deserve.
          
          
          </motion.p>
          <a href="#contact" className="text-[#ffffff] px-2 text-m underline cursor-pointer">Message Me</a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
