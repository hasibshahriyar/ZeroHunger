import { TbTruckDelivery } from "react-icons/tb";
import { RiUserHeartFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";

const AdminStatsInfo = ({
  totalFood,
  totalRecipient,
  totalDonor,

  totalDelivered,
}) => {
  return (
    <div className="bg-gray-100 w-full p-12 grid justify-center md:grid-cols-3 px-4  gap-6">
      <div className="bg-[#ffffff]  shadow-lg w-[300px] h-[150px] rounded-lg flex items-center justify-between px-6">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-lg">Total Food</p>
          <p className="text-2xl font-bold text-yellow-500">{totalFood}</p>
        </div>
        <div className="text-white p-3 text-2xl bg-yellow-500 rounded-lg">
          <FaBowlFood></FaBowlFood>
        </div>
      </div>

      <div className="bg-[#ffffff]  shadow-lg w-[300px] h-[150px] rounded-lg flex items-center justify-between px-6">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-lg">Total Recipient</p>
          <p className="text-2xl font-bold text-cyan-500">{totalRecipient}</p>
        </div>
        <div className="text-white p-3 text-2xl bg-cyan-500 rounded-lg">
          <FaUser></FaUser>
        </div>
      </div>
      <div className="bg-[#ffffff]  shadow-lg w-[300px] h-[150px] rounded-lg flex items-center justify-between px-6">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-lg">Total Donor</p>
          <p className="text-2xl font-bold text-green-500">{totalDonor}</p>
        </div>
        <div className="text-white p-3 text-2xl bg-green-500 rounded-lg">
          <RiUserHeartFill></RiUserHeartFill>
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
  );
};

export default AdminStatsInfo;
