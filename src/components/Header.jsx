import {
  HAMBURGERMENU_URL,
  YOUTUBELOGO_URL,
  USER_LOGO,
  SEARCH_ICON,
} from "../Utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/menuBarSlice";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col     shadow-lg ">
      <div className="flex items-center col-span-1 ml-2">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          alt="menu"
          className="w-16 h-12"
          src={HAMBURGERMENU_URL}
        />

        <img alt="Youtubelogo" className="w-32 h-20" src={YOUTUBELOGO_URL} />
      </div>
      <div className="flex items-center col-span-9 justify-center   ">
        <input
          type="text"
          className="border-[1.5px] rounded-l-full w-2/4  p-[4.5px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>
          <img
            alt="search"
            className="h-9 border-[1.5px]  bg-gray-200  border-l-0 p-2 rounded-r-full cursor-pointer px-4"
            src={SEARCH_ICON}
          />
        </button>
      </div>
      <div className="col-span-2 m-auto mr-7">
        <img alt="user" className="w-12 h-12 " src={USER_LOGO} />
      </div>
    </div>
  );
};
export default Header;
