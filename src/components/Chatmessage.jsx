import { USER_LOGO } from "../Utils/constants";
const Chatmessage = ({ name, message }) => {
  return (
    <div className="flex items-center mt-2 text-sm">
      <img alt="user" className="w-10 h-6 " src={USER_LOGO} />
      <div>
        <span className="font-bold mr-2">{name}🚀</span>

        <span>{message}</span>
      </div>
    </div>
  );
};

export default Chatmessage;
