import React from "react";
import { FaBowlFood, FaUsers } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

const DonorStatsInfo = ({ totalRecipient, totalFood, totalDelivered }) => {
  return (
    <div className="bg-gray-100 w-full mb-16 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
      <div className="bg-[#ffffff]  shadow-lg h-[200px] rounded-lg flex items-center justify-between px-6">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-lg">Total Donated Food</p>
          <p className="text-2xl font-bold text-yellow-500">{totalFood}</p>
        </div>
        <div className="text-white p-3 text-2xl bg-yellow-500 rounded-lg">
          <FaBowlFood></FaBowlFood>
        </div>
      </div>
      <div className="bg-[#ffffff]  shadow-lg h-[200px] rounded-lg flex items-center justify-between px-6">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-lg">Total Recipient</p>
          <p className="text-2xl font-bold text-teal-500">{totalRecipient}</p>
        </div>
        <div className="text-white p-3 text-2xl bg-teal-500 rounded-lg">
          <FaUsers></FaUsers>
        </div>
      </div>
      <div className="bg-[#ffffff]  shadow-lg h-[200px] rounded-lg flex items-center justify-between px-6">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-lg">Total Delivered</p>
          <p className="text-2xl font-bold text-blue-500">{totalDelivered}</p>
        </div>
        <div className="text-white p-3 text-2xl bg-blue-500 rounded-lg">
          <TbTruckDelivery></TbTruckDelivery>
        </div>
      </div>
    </div>
  );
};

export default DonorStatsInfo;
