import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
import registerBg from "../../assets/banner1.png";
const Register = () => {
  const { register, error, logout } = useAuth();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const userImage = "https://i.ibb.co/5cxvxkf/userr.jpg";
    const role = "user";

    await register(name, email, userImage, password, role).then(
      async (data) => {
        if (data?.message) {
          toast.success(`Register successfully`);
          await logout();
          navigate("/login");
        } else {
          toast.error(`${error}`);
        }
      }
    );
  };
  const [toggle, setToggle] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-cyan-600 flex items-center justify-center p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Register Now!
            </h1>
            <p className="text-gray-600">Join our community and make a difference</p>
          </div>
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={toggle ? "text" : "password"}
                  placeholder="Create a password"
                  name="password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setToggle(!toggle)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {toggle ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-cyan-500 text-white py-3 px-4 rounded-lg font-medium hover:from-green-500 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-green-600 hover:text-green-700 font-medium hover:underline"
            >
              Login
            </NavLink>
          </p>
        </div>
        
        {/* Right side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <img 
            src={registerBg} 
            alt="People helping with food donation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <h2 className="text-4xl font-bold mb-4">Join Our Mission!</h2>
              <p className="text-lg">Help us fight hunger and make a positive impact in your community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
