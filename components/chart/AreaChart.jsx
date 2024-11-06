'use client';

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const productSales = [
  { name: 'Jan', product1: 4000, product2: 2400 },
  { name: 'Feb', product1: 3000, product2: 2210 },
  { name: 'Mar', product1: 2000, product2: 2290 },
  { name: 'Apr', product1: 2780, product2: 2000 },
  { name: 'May', product1: 1890, product2: 2181 },
  { name: 'Jun', product1: 2390, product2: 2500 },
];

const AreaChartComponent = () => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:border dark: hsl(var(--primary)) rounded-md shadow-md p-5">
      <h2 className="text-lg font-semibold mb-4">Product Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={productSales}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />hsl(var(--primary))
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="product1"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="product2"
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId="1"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 text-white rounded-md shadow-lg">
        <p className="text-lg font-bold">{label}</p>
        <p className="text-sm">
          <span className="text-blue-400">Product 1:</span>
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm">
          <span className="text-indigo-400">Product 2:</span>
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default AreaChartComponent;
