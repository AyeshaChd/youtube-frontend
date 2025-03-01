import SideBarPanel from "../components/SideBarPanel";
import MainContainer from "./MainContainer";
import {Outlet} from "react-router"

const Body = () => {
  return (
    <div className="grid  grid-flow-col">
      <SideBarPanel />
     <Outlet/>
    </div>
  );
};

export default Body;
