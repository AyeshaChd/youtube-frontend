import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap  mr-10 justify-evenly">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
