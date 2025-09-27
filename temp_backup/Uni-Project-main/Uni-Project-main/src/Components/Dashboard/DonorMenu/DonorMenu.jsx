import React from "react";
import { NavLink } from "react-router-dom";
import "../dashboard.css";

const DonorMenu = () => {
  return (
    <div className="flex flex-col gap-5" id="menu">
      <NavLink to={"/dashboard/donor-profile"}>Donor Profile</NavLink>
      <NavLink to={"/dashboard/add-food"}>Donate Food</NavLink>
      <NavLink to={"/dashboard/manage-added-foods"}>
        Manage Donated Foods
      </NavLink>
      <NavLink to={"/dashboard/manage-requested-foods"}>
        Manage Requested Foods
      </NavLink>
    </div>
  );
};

export default DonorMenu;
