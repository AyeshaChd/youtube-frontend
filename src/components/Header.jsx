import {
  HAMBURGERMENU_URL,
  YOUTUBELOGO_URL,
  USER_LOGO,
  SEARCH_ICON,
} from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/menuBarSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState("false");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  //storedsuggestions--searchcache
  const storedSuggestions = useSelector((store) => store.search);
  useEffect(() => {
    //debouncing increasing  the performance of app
    const timer = setTimeout(() => {
      //searching in object as we do in hashmap
      if (storedSuggestions[searchQuery]) {
        setsuggestions(storedSuggestions[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    console.log("api call", searchQuery);
    const json = await data.json();
    setsuggestions(json[1]);

    ///updating the cacheResults--storedsuggestions in store ,with the not stored suggestions for the first time searched query
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col    shadow-lg ">
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
      <div className=" flex flex-col col-span-9 justify-center  ">
        <div className="m-auto">
          <div className="flex">
            <input
              type="text"
              className="border-[1.5px] rounded-l-full w-[25rem] p-[4.5px] px-5  py-1 font-semibold "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button>
              <img
                alt="search"
                className="h-9 border-[1.5px]  bg-gray-200  border-l-0 p-2  py-2 rounded-r-full cursor-pointer px-4"
                src={SEARCH_ICON}
              />
            </button>
          </div>

          <div>
            {showSuggestions && (
              <ul className="  fixed  items-center  w-[25rem]  rounded-[1rem] shadow-lg  bt bg-white  z-10">
                {suggestions.map((s) => (
                  <li key={s} className=" py-2 pl-5 font-semibold">
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-2 m-auto mr-7">
        <img alt="user" className="w-12 h-8 " src={USER_LOGO} />
      </div>
    </div>
  );
};
export default Header;
