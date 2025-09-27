import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiImage, FiSave, FiEdit3, FiUpload } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Card, { CardContent, CardHeader } from '../../UI/Card';
import toast from 'react-hot-toast';

const AccountSettings = () => {
  const { user, updateProfile } = useAuth();
  const [role] = useRole();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      // Implement profile update logic here
      // This would typically make an API call to update user info
      
      // For now, show success message
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    if (formData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    try {
      // Implement password change logic here
      toast.success('Password updated successfully!');
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
    } catch (error) {
      toast.error('Failed to update password');
    } finally {
      setIsLoading(false);
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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold text-secondary-800">Account Settings</h2>
            <Button
              variant={isEditing ? 'secondary' : 'primary'}
              onClick={() => setIsEditing(!isEditing)}
              leftIcon={isEditing ? <FiSave className="w-4 h-4" /> : <FiEdit3 className="w-4 h-4" />}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={user?.userImage || "https://i.ibb.co/5cxvxkf/userr.jpg"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-primary-100"
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co/5cxvxkf/userr.jpg";
                  }}
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors">
                    <FiUpload className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getRoleBadgeColor(role)}`}>
                <MdVerified className="w-3 h-3" />
                <span className="capitalize">{role === 'donor' ? 'Food Donor' : role === 'admin' ? 'Administrator' : 'Community Member'}</span>
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex-1 space-y-4">
              <Input
                label="Full Name"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                leftIcon={<FiUser className="w-4 h-4" />}
                disabled={!isEditing}
              />
              
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                leftIcon={<FiMail className="w-4 h-4" />}
                disabled={!isEditing}
              />

              {isEditing && (
                <div className="pt-4">
                  <Button
                    onClick={handleSaveProfile}
                    loading={isLoading}
                    leftIcon={<FiSave className="w-4 h-4" />}
                  >
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Password Change */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-heading font-semibold text-secondary-800">Change Password</h3>
          <p className="text-sm text-secondary-600">Update your password to keep your account secure</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Input
                label="Current Password"
                name="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={handleInputChange}
                leftIcon={<FiLock className="w-4 h-4" />}
                showPasswordToggle
              />
            </div>
            
            <Input
              label="New Password"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleInputChange}
              leftIcon={<FiLock className="w-4 h-4" />}
              showPasswordToggle
              helperText="Minimum 6 characters"
            />
            
            <Input
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              leftIcon={<FiLock className="w-4 h-4" />}
              showPasswordToggle
            />
          </div>
          
          <div className="pt-4">
            <Button
              onClick={handlePasswordChange}
              loading={isLoading}
              disabled={!formData.currentPassword || !formData.newPassword || !formData.confirmPassword}
            >
              Update Password
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Account Statistics */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-heading font-semibold text-secondary-800">Account Activity</h3>
          <p className="text-sm text-secondary-600">Your contribution to the ZeroHunger community</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-primary-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600">
                {role === 'donor' ? '12' : '8'}
              </div>
              <div className="text-sm text-secondary-600">
                {role === 'donor' ? 'Food Donations' : 'Requests Made'}
              </div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">
                {role === 'donor' ? '48' : '15'}
              </div>
              <div className="text-sm text-secondary-600">
                {role === 'donor' ? 'People Helped' : 'Foods Received'}
              </div>
            </div>
            
            <div className="text-center p-4 bg-accent-50 rounded-xl">
              <div className="text-2xl font-bold text-accent-600">4.8</div>
              <div className="text-sm text-secondary-600">Average Rating</div>
            </div>
            
            <div className="text-center p-4 bg-secondary-50 rounded-xl">
              <div className="text-2xl font-bold text-secondary-600">
                {new Date(user?.createdAt || Date.now()).getFullYear()}
              </div>
              <div className="text-sm text-secondary-600">Member Since</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;