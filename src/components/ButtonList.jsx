import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex space-x-6 mt-5 ml-2 ">
      <Button name="All" bg_color="black" />
      <Button name="News" />
      <Button name="Cricket" />
      <Button name="Game" />
      <Button name="Live" />
      <Button name="music" />
      <Button name="Dramas" />
      <Button name="Cooking" />
      <Button name="Clothing" />
      <Button name="Design" />
    </div>
  );
};

export default ButtonList;
