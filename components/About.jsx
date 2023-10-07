import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-screen h-screen md:h-screen flx items-center py-[10%] bg-[#70877F]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 justify-center">
        <div className="col-span-2">
          <h2 className="py-4 text-[#37355A] font-extrabold">Who I am</h2>
          <p className="py-2 text-[#ffffff] text-xl font-sans text">
            My name is Liam, I’m a passionate creative whose love for
            storytelling manifests itself in various digital mediums. With every
            project, I strive to not only capture the attention of my audiences,
            but to make meaningful connections and opportunities in the process.
          </p>
          <Link href="/#skills">
            <p className="py-2 text-[#37355A] text-xl underline cursor-pointer">
              Services
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-[#EF946C] rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-500">
          <Image
            src="/portrait.jpg"
            alt="Picture of Liam"
            width="640"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
