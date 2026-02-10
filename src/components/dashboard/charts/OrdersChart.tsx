"use client";

import { memo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { OrdersPoint } from "@/src/types/dashboard";

type OrdersChartProps = {
  data: OrdersPoint[];
};

const OrdersChart = ({ data }: OrdersChartProps) => (
  <ResponsiveContainer width="100%" height={260}>
    <BarChart data={data} margin={{ top: 10, right: 20, left: -10 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
      <XAxis dataKey="month" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <Tooltip
        contentStyle={{
          borderRadius: 12,
          borderColor: "#e2e8f0",
        }}
      />
      <Bar
        dataKey="orders"
        fill="#0f172a"
        radius={[6, 6, 0, 0]}
        isAnimationActive
      />
    </BarChart>
  </ResponsiveContainer>
);

export default memo(OrdersChart);
