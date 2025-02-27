import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  useEffect(() => {
    console.log("useee");
    getVideos();
  }, []);
  const [videos, setVideos] = useState([]);

  console.log("1");
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("useff");
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap space-x-5 mr-10 justify-evenly">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
