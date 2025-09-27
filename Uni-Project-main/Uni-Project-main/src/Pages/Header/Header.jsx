import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "../../Components/Container";
import useAuth from "../../hooks/useAuth";
import HeaderModal from "../../Components/Modal/HeaderModal/HeaderModal";
import useRole from "../../hooks/useRole";
import "../../Components/Dashboard/dashboard.css";

const Header = () => {
  const { user } = useAuth();
  const [role] = useRole();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/available">Available Foods</NavLink>
      </li>
      <li>
        {user && role === "user" && (
          <NavLink to={"/dashboard/user-profile"}>Dashboard</NavLink>
        )}
        {user && role === "donor" && (
          <NavLink to={"/dashboard/donor-profile"}>Dashboard</NavLink>
        )}
        {user && role === "admin" && (
          <NavLink to={"/dashboard/admin-profile"}>Dashboard</NavLink>
        )}
      </li>
      <li>
        <NavLink to="/chatbot">Chatbot</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-cyan-400 text-white">
      <Container>
        <nav className="navbar   ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-blue-950 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link to={"/"}>
              <div className="flex items-center gap-3">
                <img className="w-20 h-[20]" src={logo} alt="" />
                <p className="text-3xl font-bold">
                  Zero <span className="text-gray-800  text-3xl ">Hunger</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex" id="menu">
            <ul className=" menu-horizontal text-lg gap-4 text-blue-950 py-4">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {!user ? (
              <Link to={"/login"}>
                <button className="btn bg-third text-second border-none">
                  Login
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-6">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {user?.userImage ? (
                  <div className="">
                    <img
                      onClick={() => setIsOpen(true)}
                      className="w-[40px] h-[40px] rounded-full cursor-pointer"
                      src={user?.userImage}
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </nav>
        <HeaderModal isOpen={isOpen} closeModal={closeModal}></HeaderModal>
      </Container>
    </div>
  );
};

export default Header;
