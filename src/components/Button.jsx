const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-neutral-200 px-4 rounded-[10px] py-[5px] font-bold text-[.85rem]">
        {name}
      </button>
    </div>
  );
};

export default Button;
