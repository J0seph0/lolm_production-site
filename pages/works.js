import React from "react";
import NavBar from "@components/NavBar";

const works = () => {
  const videos = [
    {
      title: "Work 1",
      description: "Description of work 1",
      url: "https://player.vimeo.com/video/866193669",
    },
    {
      title: "Work 2",
      description: "Description of work 2",
      url: "https://player.vimeo.com/video/896365954",
    },
    {
      title: "Work 2",
      description: "Description of work 2",
      url: "https://player.vimeo.com/video/918728388",
    },
    {
      title: "Work 2",
      description: "Description of work 2",
      url: "https://player.vimeo.com/video/778298765",
    },
  ];

  return (
    <div className="w-screen h-screen grid">
      <NavBar isDifferentPage={true}/>
      <div className="mt-20 h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video, i) => (
          <div key={i} className="p-0 w-full h-full">
            <iframe
              className="w-full h-full"
              src={video.url}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; picture-in-picture"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default works;
