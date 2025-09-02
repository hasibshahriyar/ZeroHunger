import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import UserStatsInfo from "../../../Components/Dashboard/User/UserStatsInfo";
import useAxios from "../../../hooks/useAxios";
import DashboardContainer from "../../../Components/DashboardContainer";
import Loader from "../../../Components/Loader/Loader";
import ProfileText from "../../../Components/ProfileText/ProfileText";

const UserProfile = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { data: stat, isLoading } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axios.get(`/users/user-stats/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <DashboardContainer>
          <ProfileText></ProfileText>
          <div>
            <UserStatsInfo
              totalAccepted={stat?.accepted ? stat?.accepted : 0}
              totalDelivered={stat?.delivered ? stat?.delivered : 0}
              totalRejected={stat?.rejected ? stat?.rejected : 0}
              totalRequested={stat?.requested ? stat?.requested : 0}
            ></UserStatsInfo>
          </div>
          <div className="border rounded-lg shadow-md mt-14 p-16">
            <div className="bg-gray-100 w-full p-6 flex items-center gap-6">
              <div>
                <img className="w-24 rounded-xl" src={user?.userImage} alt="" />
              </div>
              <div>
                <p className="text-first font-medium text-lg">
                  {user?.username}
                </p>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>
        </DashboardContainer>
      )}
    </div>
  );
};

export default UserProfile;
