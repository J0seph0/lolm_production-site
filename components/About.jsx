import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, 
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, 
  });

  return (
    <div
      id="about"
      className="w-screen md:h-auto flex items-center bg-[#70877F] p-0 py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 justify-center">
        <div className="col-span-2">
          <h2 className="py-4 text-[#37355A] font-extrabold m-2">Who I am</h2>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 1 : 400 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="py-2 px-1 text-[#ffffff] font-sans text m-2"
          >
            My name is Liam, I’m a passionate creative whose love for
            storytelling manifests itself in various digital mediums. With every
            project, I strive to not only capture the attention of my audiences,
            but to make meaningful connections and opportunities in the process.
          </motion.p>
          <motion.p
            ref={ref2}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 1 : 400 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="py-2 px-1 text-[#ffffff] font-sans text m-2"
          >
            My journey into the world of filmmaking began working on goofy video
            projects in my middle school Spanish class of all places. I learned
            I could create emotional responses with just a camera and a story.
            Since then, I’ve built upon my skills first studying at the
            prestigious Colorado Film School. In due course I’ve had the
            opportunity to grow as an individual in the world of large budget
            video production agencies, all along the way learning from some of
            the industry’s finest. My experience has equipped me to tackle any
            project that comes my way.
          </motion.p>
          <motion.p
            ref={ref3}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 1 : 300 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="py-2 px-1 text-[#ffffff] font-sans text m-2"
          >
            The future holds endless possibilities, and I'm excited to continue
            my cinematic journey, collaborating with fellow creatives, and
            bringing captivating stories to life. Join me on this adventure, as
            we dive into the depths of human emotions and the infinite realms of
            imagination through the magic of filmmaking.
          </motion.p>
          <Link href="/works">
            <p className="py-2 text-[#37355A] text-xl underline cursor-pointer m-2 hover:scale-100">
              More Work
            </p>
          </Link>
        </div>
        <div>
          <div className="flex items-center justify-center hover:scale-105 ease-in duration-500">
            <Image
              src="/portrait.jpg"
              alt="Picture of Liam"
              width="640"
              height="300"
              className="rounded-xl w-[60%] h-[50%] md:w-[100%] md:h-[100%] shadow-[5px_10px_60px_5px_rgba(55,52,90,1)] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
