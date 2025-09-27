import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
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
    <div className="md:w-3/5 mx-4 md:mx-auto items-center my-20 py-16 bg-cyan-400 rounded-xl">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white">
            Register now!
          </h1>
        </div>
        <div className="card md:w-3/4  lg:w-1/2  shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

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
            </div>
            <div className="form-control mt-3">
              <button
                type="submit"
                className="btn btn-secondary bg-cyan-400 hover:bg-cyan-600 border-none "
              >
                Register
              </button>
            </div>
          </form>

          <p className="text-center mx-6 md:mx-0 mb-4">
            Already have an account? Please{" "}
            <NavLink
              to="/login"
              className="text-blue-700 hover:border-b border-black"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
