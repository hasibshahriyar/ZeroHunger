import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiSettings, FiUser } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import UserStatsInfo from "../../../Components/Dashboard/User/UserStatsInfo";
import useAxios from "../../../hooks/useAxios";
import DashboardContainer from "../../../Components/DashboardContainer";
import Loader from "../../../Components/Loader/Loader";
import ProfileText from "../../../Components/ProfileText/ProfileText";
import AccountSettings from "../../../Components/Dashboard/AccountSettings/AccountSettings";
import Button from "../../../Components/UI/Button";

const UserProfile = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [activeTab, setActiveTab] = useState('overview');
  
  const { data: stat, isLoading } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axios.get(`/users/user-stats/${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
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
          <UserStatsInfo
            totalAccepted={stat?.accepted || 0}
            totalDelivered={stat?.delivered || 0}
            totalRejected={stat?.rejected || 0}
            totalRequested={stat?.requested || 0}
          />
          
          {/* Enhanced Profile Card */}
          <div className="card-modern p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <img 
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-primary-100" 
                  src={user?.userImage || "https://i.ibb.co/5cxvxkf/userr.jpg"} 
                  alt="User profile picture"
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
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <FiUser className="w-3 h-3" />
                  Community Member
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

      {activeTab === 'settings' && (
        <AccountSettings />
      )}
    </DashboardContainer>
  );
};

export default UserProfile;
