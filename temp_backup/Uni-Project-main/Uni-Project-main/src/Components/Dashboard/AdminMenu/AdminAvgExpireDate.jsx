import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminAvgExpireDate = ({ data }) => {
  return (
    <div className=" bg-white p-6 shadow-lg mt-16 flex flex-col justify-center items-center">
      <p className="text-lg mb-6 font-medium text-center text-gray-500">
        Avg. Expire Date of Donated Food by Don
      </p>

      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="email" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="avg" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default AdminAvgExpireDate;
