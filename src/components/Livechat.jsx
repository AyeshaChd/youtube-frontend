import { useEffect } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessages } from "../Utils/chatSlice";

export const Livechat = () => {
  const dispatch = useDispatch;
  const chatmessags = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // api polling
      dispatch(
        addmessages({
          name: "ayesha",
          message: "hhhhh",
        })
      );
    }, 500);

    return clearInterval(i);
  }, []);
  return (
    <div>
      {chatmessags.map((c, index) => (
        <Chatmessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};
