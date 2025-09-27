import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const DonorCategoryBarChart = ({ data }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col items-center h-[500px] p-12  shadow-md">
      <p className="text-lg mb-6 font-medium text-center text-gray-500">
        Recipient Food Requests by Category
      </p>
      <BarChart
        width={350}
        height={370}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar
          dataKey="total"
          fill="teal"
          activeBar={<Rectangle fill="#82ca9d" stroke="green" />}
        />
      </BarChart>
    </div>
  );
};

export default DonorCategoryBarChart;
