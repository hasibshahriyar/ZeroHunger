import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

import AdminMenu from "./../AdminMenu/AdminMenu";
import UserMenu from "../UserMenu/UserMenu";

import logo from "../../../assets/logo.png";

import RoleSelectorButton from "./../../RoleSelectorButton/RoleSelectorButton";
import Loader from "../../Loader/Loader";

const Sidebar = () => {
  const [role] = useRole();

  const { user, isLoading } = useAuth();

  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className=" mt-8 md:mt-16 lg:mt-28 fixed    ">
          <div className="flex justify-center items-center mb-12">
            <img className="w-28 h-28" src={logo} alt="" />
          </div>
          <div className="    text-white flex flex-col     ">
            {/* upper side */}
            <div className="mb-5 pl-12">
              {user && role === "user" && <UserMenu></UserMenu>}
              {user && role === "donor" && (
                <RoleSelectorButton></RoleSelectorButton>
              )}

              {user && role === "admin" && <AdminMenu></AdminMenu>}
            </div>
            <div className="divider divider-warning "></div>
            {/* lower side */}

            <div className="flex flex-col gap-5 mt-4 pl-12     ">
              <div>
                <NavLink to={"/"}>Home</NavLink>
              </div>

              <div>
                <NavLink to={"/available"}>All Available Food</NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
