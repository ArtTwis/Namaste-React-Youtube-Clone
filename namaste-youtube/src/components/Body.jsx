import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { selectIsSidebarOpen } from "../redux/appSelector";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  return (
    <div className="main-container flex flex-row overflow-y-hidden">
      {isSidebarOpen && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
