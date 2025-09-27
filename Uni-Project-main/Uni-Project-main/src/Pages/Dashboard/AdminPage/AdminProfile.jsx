import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FiSettings, FiUser, FiBarChart, FiShield } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import AdminStatsInfo from "../../../Components/Dashboard/AdminMenu/AdminStatsInfo";
import DashboardContainer from "./../../../Components/DashboardContainer";
import AdminQuantityBarChart from "../../../Components/Dashboard/AdminMenu/AdminQuantityBarChart";
import AdminAvgExpireDate from "../../../Components/Dashboard/AdminMenu/AdminAvgExpireDate";
import Loader from "../../../Components/Loader/Loader";
import ProfileText from "../../../Components/ProfileText/ProfileText";
import AccountSettings from "../../../Components/Dashboard/AccountSettings/AccountSettings";
import Button from "../../../Components/UI/Button";

const AdminProfile = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [activeTab, setActiveTab] = useState('overview');
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
  if (isLoading) {
    return (
      <DashboardContainer>
        <Loader />
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <ProfileText />
      
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={activeTab === 'overview' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('overview')}
          leftIcon={<FiUser className="w-4 h-4" />}
        >
          Profile Overview
        </Button>
        <Button
          variant={activeTab === 'analytics' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('analytics')}
          leftIcon={<FiBarChart className="w-4 h-4" />}
        >
          System Analytics
        </Button>
        <Button
          variant={activeTab === 'settings' ? 'primary' : 'ghost'}
          onClick={() => setActiveTab('settings')}
          leftIcon={<FiSettings className="w-4 h-4" />}
        >
          Account Settings
        </Button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <AdminStatsInfo
            totalDelivered={adminStats?.userResults?.totalDelivered}
            totalFood={adminStats?.userResults?.totalFood}
            totalDonor={adminStats?.userResults?.uniqueDonor}
            totalRecipient={adminStats?.userResults?.uniqueRecipients}
          />
          
          {/* Enhanced Admin Profile Card */}
          <div className="card-modern p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <img 
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-purple-100" 
                  src={user?.userImage || "https://i.ibb.co/5cxvxkf/userr.jpg"} 
                  alt="Admin profile picture"
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co/5cxvxkf/userr.jpg";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-400 border-2 border-white rounded-full flex items-center justify-center">
                  <FiShield className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold text-secondary-800 mb-2">
                  {user?.username}
                </h3>
                <p className="text-secondary-600 mb-1">{user?.email}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <FiShield className="w-3 h-3" />
                  System Administrator
                </div>
              </div>
              
              <div className="md:ml-auto">
                <Button
                  onClick={() => setActiveTab('settings')}
                  leftIcon={<FiSettings className="w-4 h-4" />}
                >
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="mt-12 grid grid-cols-1 w-11/12 mx-auto space-y-8">
          <AdminQuantityBarChart data={barData} />
          <AdminAvgExpireDate data={areaChartData} />
        </div>
      )}

      {activeTab === 'settings' && (
        <AccountSettings />
      )}
    </DashboardContainer>
  );
};

export default AdminProfile;
