import { Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

import Sidebar from "./../Components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  const [role] = useRole();

  return (
    <div className="flex">
      <div className="w-72 flex-shrink-0  bg-cyan-500  min-h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 bg-slate-100 min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
