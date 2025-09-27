import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const axios = useAxios();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    if (user) {
      setIsLoading(false);
    }
  }, [user]);
  const register = async (username, email, userImage, password, role) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
        role,
        userImage,
      });
      setRegisterMessage(response?.data?.message);

      setUser(response?.data?.user);
      setIsLoading(false);
      return response?.data;
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };
  const login = async (email, password, username, userImage, role) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
        username,
        userImage,
        role,
      });

      setUser(response?.data?.user);

      setIsLoading(false);

      return response.data;
    } catch (err) {
      // setError(err?.response?.data?.message);
      if (err?.response?.data?.message === "Invalid Email") {
        setLoginEmailError(err?.response?.data?.message);
        setLoginPasswordError("");
      }
      if (err?.response?.data?.message === "Invalid Password") {
        setLoginPasswordError(err?.response?.data?.message);
        setLoginEmailError("");
      }
    }
  };
  const logout = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/auth/logout");
      setUser(null);
      console.log(response.data.message); // Log the logout message
    } catch (error) {
      console.error(error.response.data.message); // Log any error message
    }
  };

  const authInfo = {
    register,
    error,
    user,
    logout,
    registerMessage,
    login,
    loginEmailError,
    loginPasswordError,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
