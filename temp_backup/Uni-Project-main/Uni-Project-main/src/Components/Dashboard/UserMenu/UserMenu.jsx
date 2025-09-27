import { NavLink, useNavigate } from "react-router-dom";
import "../dashboard.css";
import useRole from "../../../hooks/useRole";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";

const UserMenu = () => {
  const [role, isLoading, refetch] = useRole();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();
  const handleRole = () => {
    const roleInfo = {
      role: "donor",
    };
    Swal.fire({
      title: "Do you want to be a donor?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Not now`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const data = await axios.put(`/users/${user?.email}`, roleInfo);
        refetch();
        Swal.fire("You are now a donor", "", "success");
        navigate("/dashboard/add-food");
      } else if (result.isDenied) {
        Swal.fire("You are not a donor at this time", "", "info");
      }
    });
  };

  return (
    <div className="flex flex-col gap-5" id="menu">
      <NavLink to={"/dashboard/user-profile"}>User Profile</NavLink>
      <NavLink to={"/dashboard/order-status"}>Order Status</NavLink>
      <NavLink to={"/dashboard/user-rating"}>User Rating</NavLink>
      <div>
        {" "}
        {role === "user" && (
          <button
            onClick={() => handleRole()}
            className="bg-white text-black font-medium p-2  rounded-lg"
          >
            Be a Donor
          </button>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
