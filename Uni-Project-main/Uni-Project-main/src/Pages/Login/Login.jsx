import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiMail, FiLock } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import loginBg from "../../assets/donation.jpg";
import logo from "../../assets/logo.png";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, loginEmailError, loginPasswordError } = useAuth();
  const axios = useAxios();
  const location = useLocation();
  const to = location?.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const email = form.email.value;
    
    try {
      const res = await axios.get(`/users/${email}`);
      const username = res?.data?.username;
      const userImage = res?.data?.userImage;
      const role = res?.data?.role;
      const password = form.password.value;

      await login(email, password, username, userImage, role).then((data) => {
        if (data) {
          toast.success("Welcome back! Login successful 🎉");
          navigate(to, { replace: true });
        }
      });
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        {/* Left side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-90"></div>
          <img 
            src={loginBg} 
            alt="Food donation illustration" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-10 z-10">
            <div className="bg-gradient-to-br from-black/40 to-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-2xl">
              <img src={logo} alt="ZeroHunger Logo" className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl" />
              <h2 className="text-4xl font-bold mb-4 text-center text-white" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                Welcome Back!
              </h2>
              <p className="text-lg text-center leading-relaxed text-white font-medium" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.5)' }}>
                Continue your journey of fighting hunger and making a positive impact in your community
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 bg-black/25 p-3 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
                  <p className="text-sm font-semibold text-white" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)' }}>
                    Access your dashboard
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-black/25 p-3 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
                  <p className="text-sm font-semibold text-white" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)' }}>
                    Track your donations
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-black/25 p-3 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
                  <p className="text-sm font-semibold text-white" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)' }}>
                    Connect with community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          {/* Logo for mobile */}
          <div className="lg:hidden flex justify-center mb-6">
            <img src={logo} alt="ZeroHunger Logo" className="w-20 h-20" />
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3 leading-tight pb-1">
              Sign In
            </h1>
            <p className="text-gray-600 text-lg">Welcome back! Please enter your details</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white transition-all duration-200 outline-none"
                  required
                />
              </div>
              {loginEmailError && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span>⚠️</span> {loginEmailError}
                </p>
              )}
            </div>
            
            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiLock className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  type={toggle ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white transition-all duration-200 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setToggle(!toggle)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {toggle ? (
                    <AiOutlineEyeInvisible size={22} />
                  ) : (
                    <AiOutlineEye size={22} />
                  )}
                </button>
              </div>
              {loginPasswordError && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span>⚠️</span> {loginPasswordError}
                </p>
              )}
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          
          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">New to ZeroHunger?</span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="text-cyan-600 hover:text-cyan-700 font-semibold hover:underline transition-colors"
              >
                Create an account
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
