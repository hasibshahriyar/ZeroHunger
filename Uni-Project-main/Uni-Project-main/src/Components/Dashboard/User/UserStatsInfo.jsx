import { IoIosCloudDone } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleRemove } from "react-icons/ci";

import { FaBowlFood } from "react-icons/fa6";
const UserStatsInfo = ({
  totalRequested,
  totalAccepted,
  totalDelivered,
  totalRejected,
}) => {
  console.log(totalAccepted, totalDelivered, totalRejected, totalRequested);
  return (
    <div>
      <div className="bg-gray-100 w-full p-12 grid justify-center md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 ">
        <div className="bg-[#ffffff]  shadow-lg w-[300px] h-[150px] rounded-lg flex items-center justify-between px-6">
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-lg">Requested</p>
            <p className="text-2xl font-bold text-yellow-500">
              {totalRequested}
            </p>
          </div>
          <div className="text-white p-3 text-2xl bg-yellow-500 rounded-lg">
            <FaBowlFood></FaBowlFood>
          </div>
        </div>

        <div className="bg-[#ffffff]  shadow-lg w-[300px] h-[150px] rounded-lg flex items-center justify-between px-6">
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-lg">Rejected</p>
            <p className="text-2xl font-bold text-red-500">{totalRejected}</p>
          </div>
          <div className="text-white p-3 text-2xl bg-red-500 rounded-lg">
            <CiCircleRemove></CiCircleRemove>
          </div>
        </div>
        <div className="bg-[#ffffff]  shadow-lg w-[300px] h-[150px] rounded-lg flex items-center justify-between px-6">
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-lg">Accepted</p>
            <p className="text-2xl font-bold text-green-500">{totalAccepted}</p>
          </div>
          <div className="text-white p-3 text-2xl bg-green-500 rounded-lg">
            <IoIosCloudDone></IoIosCloudDone>
          </div>
        </div>
        <div className="bg-[#ffffff]  shadow-lg w-[300px] h-[150px] rounded-lg flex items-center justify-between px-6">
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-lg">Delivered</p>
            <p className="text-2xl font-bold text-blue-500">{totalDelivered}</p>
          </div>
          <div className="text-white p-3 text-2xl bg-blue-500 rounded-lg">
            <TbTruckDelivery></TbTruckDelivery>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatsInfo;
