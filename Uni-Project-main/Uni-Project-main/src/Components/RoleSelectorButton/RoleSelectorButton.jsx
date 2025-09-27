import React, { useEffect, useState } from "react";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import UserMenu from "../Dashboard/UserMenu/UserMenu";
import DonorMenu from "../Dashboard/DonorMenu/DonorMenu";

const RoleSelectorButton = () => {
  const [userRoutes, setUserRoutes] = useState(
    localStorage.getItem("userRoutes") === "true" ? true : false
  );
  const [donorRoutes, setDonorRoutes] = useState(
    localStorage.getItem("donorRoutes") === "true" ? true : false
  );
  const [role] = useRole();
  const { user } = useAuth();
  const handleUserRoutes = () => {
    setUserRoutes(true);
    setDonorRoutes(false);
  };
  const handleDonorRoutes = () => {
    setUserRoutes(false);
    setDonorRoutes(true);
  };
  useEffect(() => {
    localStorage.setItem("userRoutes", userRoutes);
    localStorage.setItem("donorRoutes", donorRoutes);
  }, [userRoutes, donorRoutes]);

  return (
    <div>
      <div className="join">
        <button
          onClick={() => handleUserRoutes()}
          className={`btn join-item ${userRoutes ? "bg-[#ffd166]" : ""}`}
        >
          User
        </button>
        <button
          className={`btn join-item ${
            donorRoutes ? "bg-[#ffd166] text-second" : ""
          }`}
          onClick={() => handleDonorRoutes()}
        >
          Donor
        </button>
      </div>
      <div className=" flex  mt-8">
        {user && role === "donor" && userRoutes && <UserMenu></UserMenu>}
        {user && role === "donor" && donorRoutes && <DonorMenu></DonorMenu>}
      </div>
    </div>
  );
};

export default RoleSelectorButton;
