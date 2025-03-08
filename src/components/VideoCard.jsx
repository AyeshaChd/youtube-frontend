import { formateNumber } from "../Utils/formateNumber.js";

const VideoCard = ({ info }) => {
  if (info === undefined) {
    return null; // Return null if any of the variables are undefined
  }
  const { snippet, statistics } = info;
  const { thumbnails } = snippet;
  const { channelTitle, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="mt-7 ml-5">
      <img
        alt="thumnail"
        className="rounded-lg"
        src={thumbnails?.medium?.url}
      />
      <ul className="w-80 py-8 px-8 leading-normal pt-3">
        <li className=" text-[.95rem] font-bold  font-[roboto] line-clamp-2 ">
          {title}
        </li>
        <li className="mt-2 text-[.90rem]">{channelTitle}</li>
        <li className=" text-[.90rem]">{formateNumber(viewCount)} views.</li>
      </ul>
    </div>
  );
};

export default VideoCard;
