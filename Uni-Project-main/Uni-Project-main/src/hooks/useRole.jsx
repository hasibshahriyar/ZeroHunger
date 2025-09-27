import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRole = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: role,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["role", user],
    queryFn: async () => {
      const res = await axios.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  return [role?.role, isLoading, refetch];
};

export default useRole;
