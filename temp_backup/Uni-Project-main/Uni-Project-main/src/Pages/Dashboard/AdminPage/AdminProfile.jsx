import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../hooks/useAxios";
import AdminStatsInfo from "../../../Components/Dashboard/AdminMenu/AdminStatsInfo";
import DashboardContainer from "./../../../Components/DashboardContainer";
import AdminQuantityBarChart from "../../../Components/Dashboard/AdminMenu/AdminQuantityBarChart";
import AdminAvgExpireDate from "../../../Components/Dashboard/AdminMenu/AdminAvgExpireDate";
import Loader from "../../../Components/Loader/Loader";
import ProfileText from "../../../Components/ProfileText/ProfileText";

const AdminProfile = () => {
  const axios = useAxios();
  const { data: adminStats, isLoading } = useQuery({
    queryKey: "adminStats",
    queryFn: async () => {
      const res = await axios.get("/users/admin-stats");

      return res.data;
    },
  });
  console.log(adminStats);

  const barData =
    adminStats &&
    adminStats?.results &&
    adminStats?.results?.map((data) => {
      return {
        email: data.email,
        quantity: data.totalQuantity,
      };
    });
  const areaChartData =
    adminStats &&
    adminStats?.results &&
    adminStats?.results?.map((data) => {
      return {
        email: data.email,
        avg: data.avg_expire_date,
      };
    });
  console.log(barData);
  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <DashboardContainer>
          <div>
            <ProfileText></ProfileText>
            <AdminStatsInfo
              totalDelivered={adminStats?.userResults?.totalDelivered}
              totalFood={adminStats?.userResults?.totalFood}
              totalDonor={adminStats?.userResults?.uniqueDonor}
              totalRecipient={adminStats?.userResults?.uniqueRecipients}
            ></AdminStatsInfo>
            <div className=" mt-12 grid grid-cols-1 w-11/12  mx-auto">
              <AdminQuantityBarChart data={barData}></AdminQuantityBarChart>

              <AdminAvgExpireDate data={areaChartData}></AdminAvgExpireDate>
            </div>
          </div>
        </DashboardContainer>
      )}
    </div>
  );
};

export default AdminProfile;
