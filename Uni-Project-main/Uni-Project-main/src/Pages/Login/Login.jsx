import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import loginBg from "../../assets/donation.jpg";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { login, loginEmailError, loginPasswordError } = useAuth();
  const axios = useAxios();
  const location = useLocation();
  console.log(location);
  const to = location?.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const res = await axios.get(`/users/${email}`);

    const username = res?.data?.username;
    const userImage = res?.data?.userImage;
    const role = res?.data?.role;

    const password = form.password.value;

    await login(email, password, username, userImage, role).then((data) => {
      if (data) {
        toast.success("Login Successfully");
        navigate(to, { replace: true });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <img 
            src={loginBg} 
            alt="Food donation illustration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-lg">Continue your journey of making a difference</p>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Please Login
            </h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors"
                required
              />
              {loginEmailError && (
                <p className="text-red-500 text-sm mt-1">{loginEmailError}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={toggle ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors"
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
              {loginPasswordError && (
                <p className="text-red-500 text-sm mt-1">{loginPasswordError}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Login
            </button>
          </form>
          
          <p className="text-center mt-6 text-gray-600">
            New to here?{" "}
            <NavLink
              to="/register"
              className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline"
            >
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
