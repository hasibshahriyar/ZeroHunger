import React from "react";
import AdminProfile from "./../../../Pages/Dashboard/AdminPage/AdminProfile";
import { NavLink } from "react-router-dom";
import "../dashboard.css";
const AdminMenu = () => {
  return (
    <div className="flex flex-col gap-5" id="menu">
      <NavLink to={"/dashboard/admin-profile"}>Admin Profile</NavLink>
      <NavLink to={"/dashboard/manage-admin-food"}>Manage Foods</NavLink>
      <NavLink to={"/dashboard/manage-users"}>Manage Users</NavLink>
      <NavLink to={"/dashboard/manage-rating"}>Manage Ratings</NavLink>
    </div>
  );
};

export default AdminMenu;
