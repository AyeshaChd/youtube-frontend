import SideBarPanel from "../components/SideBarPanel";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="grid  grid-flow-col">
      <SideBarPanel />
      <MainContainer />
    </div>
  );
};

export default Body;
