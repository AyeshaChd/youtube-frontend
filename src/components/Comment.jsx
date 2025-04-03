import { USER_LOGO } from "../Utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100  rounded-lg  items-center ">
      <img className="w-16 h-10 " src={USER_LOGO} alt="an image" />
      <div className="px-1 mt-1 ">
        <p className="font-bold">{name}</p>
        <p>{text} </p>
      </div>
    </div>
  );
};

export default Comment;
