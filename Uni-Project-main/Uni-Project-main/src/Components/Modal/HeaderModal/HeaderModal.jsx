import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLogOut, FiSettings, FiShield, FiX } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useAxios from "../../../hooks/useAxios";

const HeaderModal = ({ isOpen, closeModal }) => {
  const { user, logout } = useAuth();
  const [role] = useRole();
  const navigate = useNavigate();
  const axios = useAxios();
  const [quickStats, setQuickStats] = useState({});

  useEffect(() => {
    const fetchQuickStats = async () => {
      if (role === 'donor' && user?.email) {
        try {
          const res = await axios.get(`/users/donor-stats/${user.email}`);
          setQuickStats({
            donations: res.data.totalFood || 0,
            peopleHelped: res.data.totalRecipient || 0
          });
        } catch (error) {
          console.error('Error fetching donor stats:', error);
        }
      } else if (role === 'admin') {
        try {
          const res = await axios.get('/users/admin-stats');
          setQuickStats({
            totalUsers: res.data.userResults?.uniqueDonor + res.data.userResults?.uniqueRecipients || 0,
            activeToday: res.data.userResults?.totalFood || 0
          });
        } catch (error) {
          console.error('Error fetching admin stats:', error);
        }
      }
    };

    if (isOpen && (role === 'donor' || role === 'admin')) {
      fetchQuickStats();
    }
  }, [isOpen, role, user?.email, axios]);

  const handleLogout = async () => {
    await logout();
    closeModal();
  };

  const handleAccountSettings = () => {
    closeModal();

    // Navigate to the appropriate dashboard profile page based on user role
    if (role === 'admin') {
      navigate('/dashboard/admin-profile');
    } else if (role === 'donor') {
      navigate('/dashboard/donor-profile');
    } else {
      navigate('/dashboard/user-profile');
    }
  };

  const getRoleBadgeColor = (userRole) => {
    switch (userRole) {
      case 'admin': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'donor': return 'bg-green-100 text-green-700 border-green-200';
      case 'user': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-secondary-100 text-secondary-700 border-secondary-200';
    }
  };

  const getRoleIcon = (userRole) => {
    switch (userRole) {
      case 'admin': return <FiShield className="w-3 h-3" />;
      case 'donor': return <MdVerified className="w-3 h-3" />;
      default: return <FiUser className="w-3 h-3" />;
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-end p-4 pt-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white shadow-strong transition-all">
                {/* Header */}
                <div className="relative bg-gradient-primary p-6 text-white">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FiX className="w-5 h-5" />
                  </button>

                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <img
                        className="w-16 h-16 rounded-full border-4 border-white/20 object-cover"
                        src={user?.userImage || "https://i.ibb.co/5cxvxkf/userr.jpg"}
                        alt={`${user?.username} profile picture`}
                        onError={(e) => {
                          e.target.src = "https://i.ibb.co/5cxvxkf/userr.jpg";
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
                    </div>

                    <h3 className="text-lg font-semibold capitalize">
                      {user?.username || 'User'}
                    </h3>

                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border mt-2 ${getRoleBadgeColor(role)}`}>
                      {getRoleIcon(role)}
                      <span className="capitalize">{role || 'User'}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* User Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-secondary-50 rounded-xl">
                      <FiMail className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-secondary-700">{user?.email}</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-secondary-50 rounded-xl">
                      <FiUser className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-secondary-700 capitalize">
                        {role === 'donor' ? 'Food Donor' : role === 'admin' ? 'Administrator' : 'Community Member'}
                      </span>
                    </div>
                  </div>

                  {/* Quick Stats (if donor or admin) */}
                  {(role === 'donor' || role === 'admin') && (
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 className="text-sm font-medium text-secondary-700 mb-2">Quick Stats</h4>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary-600">
                            {role === 'donor' ? (quickStats.donations || 0) : (quickStats.totalUsers || 0)}
                          </div>
                          <div className="text-xs text-secondary-500">
                            {role === 'donor' ? 'Donations' : 'Total Users'}
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-accent-600">
                            {role === 'donor' ? (quickStats.peopleHelped || 0) : (quickStats.activeToday || 0)}
                          </div>
                          <div className="text-xs text-secondary-500">
                            {role === 'donor' ? 'People Helped' : 'Active Today'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={handleAccountSettings}
                      className="w-full flex items-center gap-3 p-3 text-left hover:bg-secondary-50 rounded-xl transition-colors group"
                    >
                      <FiSettings className="w-4 h-4 text-secondary-500 group-hover:text-primary-600 transition-colors" />
                      <span className="text-sm text-secondary-700 group-hover:text-primary-700 transition-colors">View Profile & Settings</span>
                    </button>

                    {/* Quick Actions based on role */}
                    {role === 'donor' && (
                      <button
                        onClick={() => {
                          closeModal();
                          navigate('/dashboard/add-food');
                        }}
                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-green-50 rounded-xl transition-colors group"
                      >
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-sm text-green-700 group-hover:text-green-800 transition-colors">Add Food Donation</span>
                      </button>
                    )}

                    {role === 'user' && (
                      <button
                        onClick={() => {
                          closeModal();
                          navigate('/available');
                        }}
                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-blue-50 rounded-xl transition-colors group"
                      >
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-sm text-blue-700 group-hover:text-blue-800 transition-colors">Browse Available Food</span>
                      </button>
                    )}

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 p-3 text-left hover:bg-red-50 rounded-xl transition-colors text-red-600"
                    >
                      <FiLogOut className="w-4 h-4" />
                      <span className="text-sm font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default HeaderModal;
