
import { useEffect, useRef, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { randomNameGenerator, randomStringGenerator } from "../Utils/Helper";
import { SEND_ICON } from "../Utils/constants";

export const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomStringGenerator(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  // auto-scroll to bottom when messages update
  useEffect(() => {
    setTimeout(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, 0);
  }, [chatmessages]);

  return (
    <div  >
      {/* CHAT WINDOW */}
      <div
        ref={chatContainerRef}
        className=" w-80 h-[355px] overflow-y-scroll flex flex-col"
      >
        {chatmessages.map((c, index) => (
          <Chatmessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      {/* INPUT */}
      <form
        className="ml-0 py-4 px-0 border border-black border-b-0 w-full rounded-lg mb-0 flex"
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage.trim()) return;

          dispatch(
            addMessage({
              name: "Ayesha",
              message: liveMessage,
            })
          );

          setLiveMessage("");
        }}
      >
        <input
          className="w-80 ml-4 border-none px-2 mb-0 rounded-2xl bg-slate-100 focus:outline-none"
          type="text"
          value={liveMessage}
          placeholder="chat.."
          onChange={(e) => setLiveMessage(e.target.value)}
        />

        <button className="bg-slate-100 ml-1 rounded-full w-8 h-8">
          <img className="w-6 h-6" src={SEND_ICON} alt="send" />
        </button>
      </form>
    </div>
  );
};