import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../Utils/menuBarSlice";
import { useSearchParams } from "react-router";

const WatchPg = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe
        className="ml-16 mt-14 rounded-lg"
        width="630"
        height="370"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPg;
