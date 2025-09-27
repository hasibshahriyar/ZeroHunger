import { useQuery } from "@tanstack/react-query";

import Loader from "../../../Components/Loader/Loader";
import DashboardContainer from "./../../../Components/DashboardContainer";
import AdminManageUsersTable from "../../../Components/Dashboard/AdminMenu/AdminManageUsersTable";
import useAxios from "../../../hooks/useAxios";
import HeadingText from "../../../HeadingText/HeadingText";

const ManageUsers = () => {
  const axios = useAxios();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get("/users");
      return data;
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <DashboardContainer>
          <div className="min-h-screen  ">
            <HeadingText
              heading={"Manage Users"}
              subHeading={
                "Oversee and manage the user listed on the platform to maintain quality standards."
              }
            ></HeadingText>
            <h3 className="mt-6 mb-8 font-bold text-lg">
              Total Users:{users?.length}
            </h3>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className=" text-center bg-yellow-500 text-white text-[16px]">
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>

                    <th>Update Role</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users.map((user, index) => (
                    <AdminManageUsersTable
                      userData={user}
                      refetch={refetch}
                      index={index}
                    ></AdminManageUsersTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </DashboardContainer>
      )}
    </div>
  );
};

export default ManageUsers;
