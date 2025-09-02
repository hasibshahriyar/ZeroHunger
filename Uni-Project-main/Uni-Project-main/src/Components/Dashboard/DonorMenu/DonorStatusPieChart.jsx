import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
  Legend,
  LabelList,
} from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DonorStatusPieChart = ({ data }) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + (radius + 5) * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="bg-white rounded-lg h-[500px] p-8  shadow-md flex flex-col justify-center items-center">
      <p className="text-lg mb-6 font-medium text-center text-gray-500 ">
        Percentage of Donated Food Items by Status
      </p>
      <PieChart width={200} height={370}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
    </div>
  );
};

export default DonorStatusPieChart;
