import React, { useState } from "react";
import { FiSettings, FiUser, FiBarChart } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import DashboardContainer from "../../../Components/DashboardContainer";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import DonorStatsInfo from "../../../Components/Dashboard/DonorMenu/DonorStatsInfo";
import DonorStatusPieChart from "../../../Components/Dashboard/DonorMenu/DonorStatusPieChart";
import Loader from "../../../Components/Loader/Loader";
import DonorCategoryBarChart from "./DonorCategoryBarChart";
import ProfileText from "../../../Components/ProfileText/ProfileText";
import AccountSettings from "../../../Components/Dashboard/AccountSettings/AccountSettings";
import Button from "../../../Components/UI/Button";

const DonorProfile = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const { data: stats, isLoading } = useQuery({
    queryKey: ["donor-stats", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/users/donor-stats/${user?.email}`);
      return res.data;
    },
  });

  const pieData =
    stats &&
    stats?.statusData &&
    stats?.statusData?.map((data) => {
      return { name: data.status, value: data.count };
    });
  const barData =
    stats &&
    stats?.categoryData &&
    stats?.categoryData?.map((data) => {
      return { category: data.category, total: data.count };
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
          Donation Analytics
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
          <DonorStatsInfo
            totalRecipient={stats?.totalRecipient}
            totalFood={stats?.totalFood}
            totalDelivered={stats?.delivered}
          />
          
          {/* Enhanced Donor Profile Card */}
          <div className="card-modern p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <img 
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-green-100" 
                  src={user?.userImage || "https://i.ibb.co/5cxvxkf/userr.jpg"} 
                  alt="Donor profile picture"
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co/5cxvxkf/userr.jpg";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold text-secondary-800 mb-2">
                  {user?.username}
                </h3>
                <p className="text-secondary-600 mb-1">{user?.email}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <MdVerified className="w-3 h-3" />
                  Verified Food Donor
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            {barData?.length > 0 && (
              <DonorCategoryBarChart data={barData} />
            )}
          </div>
          <div className="lg:col-span-2">
            {pieData?.length > 0 && (
              <DonorStatusPieChart data={pieData} />
            )}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <AccountSettings />
      )}
    </DashboardContainer>
  );
};

export default DonorProfile;
