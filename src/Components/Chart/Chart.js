import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useAllProducts from "../../Hooks/useAllProducts";

const Chart = () => {
  const { products } = useAllProducts();
  return (
    <div>
      <ResponsiveContainer width={"100%"} aspect={3}>
        <AreaChart data={products}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productName" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="quantity"
            stroke="#8884d8"
            fill="#66cdab6e"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
