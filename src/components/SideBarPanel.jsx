import { useSelector } from "react-redux";
import {
  HOME_ICON,
  SHORTS_ICON,
  SUBSCRIPTIONS_ICON,
  PLAYLIST_ICON,
  HISTORY_ICON,
  WATCH_LATER,
  VIDEOS_ICONS,
} from "../Utils/constants";

const SideBarPanel = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  // Early return pattern

  if (!isMenuOpen) return null;
  return (
    <div className=" w-58 shadow-lg">
      <div className="sideBarPanel mt-6 font-semibold flex justify-between  ">
        <div className="icons w-1/2 mt-4">
          <ul className=" flex flex-col justify-center items-center ">
            <li>
              <img alt="Home-pg" className="h-16 p-1" src={HOME_ICON} />
            </li>
            <li>
              <img alt="shorts" className="h-6  mt-1 mb-6" src={SHORTS_ICON} />
            </li>
            <li>
              <img
                alt="subscription"
                className="h-6 mb-6 "
                src={SUBSCRIPTIONS_ICON}
              />
            </li>
            <li>
              <img alt="playlist" className="h-5 mb-4" src={PLAYLIST_ICON} />
            </li>
            <li>
              <img alt="history" className="h-6 mt-2 mb-4" src={HISTORY_ICON} />
            </li>
            <li>
              <img
                alt="liked vidoes"
                className="h-6  mt-3 mb-4"
                src={VIDEOS_ICONS}
              />
            </li>
            <li>
              <img
                alt="watch-later"
                className="h-6 mt-2  mb-4"
                src={WATCH_LATER}
              />
            </li>
          </ul>
        </div>
        <div className="headings size-full mt-1">
          <ul className="icons flex flex-col ">
            <li className="mt-8 ">Home</li>
            <li className="mt-6">Shorts</li>
            <li className="mt-6">Subscriptions</li>
            <li className="mt-6">History</li>
            <li className="mt-6">Playlist</li>
            <li className="mt-6">Your Videos</li>
            <li className="mt-6">Watch Later</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarPanel;
