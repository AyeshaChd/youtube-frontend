import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../Utils/menuBarSlice";
import { useSearchParams } from "react-router";
import MOCK_COMMENTDATA from "../Utils/MOCK_COMMENTDATA";
import CommentList from "./CommentList";
import { Livechat } from "./Livechat";

const WatchPg = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="ml-20 mt-8">
      <div className="flex w-full">
        <iframe
          className="  rounded-lg "
          width="650"
          height="370"
          // width="630"
          // height="370"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="pl-6 border border-black rounded-lg h-[370] ml-10 w-1/3">
          <Livechat />
        </div>
      </div>
      <div className="font-bold  mt-3 text-xl">Comments:</div>
      <div className="w-[39rem] mt-4 text-sm ">
        <CommentList comments={MOCK_COMMENTDATA} />
      </div>
    </div>
  );
};

export default WatchPg;
