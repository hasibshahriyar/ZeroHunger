import { useState } from "react";

import { MdDelete } from "react-icons/md";

import Swal from "sweetalert2";
import UpdateUserRoleModal from "./UpdateUserRoleModal";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const AdminManageUsersTable = ({ userData, index, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const axios = useAxios();
  const [userInfo, setUserInfo] = useState({});
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = (userData) => {
    setIsOpen(true);
    setUserInfo(userData);
  };
  const handleDeleteUser = async (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await axios.delete(`/users/${email}`);

        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "user has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <th>
        <img 
          className="w-24 h-24 rounded object-cover" 
          src={userData?.userImage || "https://i.ibb.co/5cxvxkf/userr.jpg"} 
          alt="User profile picture"
          onError={(e) => {
            e.target.src = "https://i.ibb.co/5cxvxkf/userr.jpg";
          }}
        />
      </th>
      <th className="capitalize">{userData?.username}</th>
      <th>{userData?.email}</th>
      <th className=" capitalize">{userData?.role}</th>

      <th>
        <button
          disabled={userData?.role === "admin"}
          className="btn btn-sm bg-cyan-500 text-white border-none hover:bg-cyan-700"
          onClick={() => openModal(userData)}
        >
          Update
        </button>
      </th>
      <th>
        <button
          disabled={userData.role === "admin"}
          onClick={() => handleDeleteUser(userData?.email)}
          className="btn btn-sm text-red-500 text-lg"
        >
          <MdDelete></MdDelete>
        </button>
      </th>
      <UpdateUserRoleModal
        closeModal={closeModal}
        isOpen={isOpen}
        user={userInfo}
        refetch={refetch}
        setIsOpen={setIsOpen}
      ></UpdateUserRoleModal>
    </tr>
  );
};

export default AdminManageUsersTable;
