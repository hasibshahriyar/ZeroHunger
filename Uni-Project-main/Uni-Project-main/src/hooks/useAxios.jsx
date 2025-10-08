import axios from "axios";
const instance = axios.create({
  baseURL: "https://zero-hunger-backend.onrender.com/api/v1",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
