import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

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
    <div className="md:w-3/5 mx-4 md:mx-auto items-center mt-20 py-16 bg-cyan-400 rounded-xl">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white">
            Please Login{" "}
          </h1>
        </div>
        <div className="card md:w-3/4   lg:w-1/2   shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            {loginEmailError && (
              <p className=" text-red-500 ml-3">{loginEmailError}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type={toggle ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                {toggle ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setToggle(!toggle)}
                    className="relative right-6 cursor-pointer"
                  ></AiOutlineEyeInvisible>
                ) : (
                  <AiOutlineEye
                    onClick={() => setToggle(!toggle)}
                    className="relative right-6 cursor-pointer"
                  ></AiOutlineEye>
                )}
              </div>
              {loginPasswordError && (
                <p className=" ml-3 text-red-500">{loginPasswordError}</p>
              )}
            </div>
            <div className="form-control mt-3">
              <button
                type="submit"
                className="btn btn-secondary bg-cyan-400 hover:bg-cyan-600 border-none "
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center mb-4">
            New to here? Please{" "}
            <NavLink
              to="/register"
              className="text-blue-700 hover:border-b border-black"
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
