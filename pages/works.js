import React from "react";
import NavBar from "@components/NavBar";

const works = () => {
  const videos = [
    {
      title: "Work 1",
      description: "Description of work 1",
      url: "https://player.vimeo.com/video/866193669?autoplay=1&muted=1&loop=1&autopause=0",
    },
    {
      title: "Work 2",
      description: "Description of work 2",
      url: "https://player.vimeo.com/video/896365954?autoplay=1&muted=1&loop=1&autopause=0",
    },
    {
      title: "Work 3",
      description: "Description of work 2",
      url: "https://player.vimeo.com/video/918728388?autoplay=1&muted=1&loop=1&autopause=0",
    },
    {
      title: "Work 4",
      description: "Description of work 2",
      url: "https://player.vimeo.com/video/778298765?autoplay=1&muted=1&loop=1&autopause=0",
    },
  ];

  return (
    <div className="w-full h-full grid bg-[#37355A]">
      <NavBar isDifferentPage={true}/>
      <div className=" mt-20 h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl text-white font-bold w-fit relative" style={{ left: '0px' }}>W</h1>
        <h1 className="text-7xl text-white font-bold w-fit relative" style={{ left: '20px' }}>O</h1>
        <h1 className="text-7xl text-white font-bold w-fit relative" style={{ left: '40px' }}>R</h1>
        <h1 className="text-7xl text-white font-bold w-fit relative" style={{ left: '60px' }}>K</h1>
        <h1 className="text-7xl text-white font-bold w-fit relative" style={{ left: '80px' }}>S</h1>
        </div>
        {videos.map((video, i) => (
          <div key={i} className="w-full h-full p-2">
            <iframe
              className="w-full h-full rounded-sm"
              src={video.url}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default works;
