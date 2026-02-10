"use client";

import { memo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RevenuePoint } from "@/src/types/dashboard";

type RevenueChartProps = {
  data: RevenuePoint[];
};

const RevenueChart = ({ data }: RevenueChartProps) => (
  <ResponsiveContainer width="100%" height={260}>
    <LineChart data={data} margin={{ top: 10, right: 20, left: -10 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
      <XAxis dataKey="month" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <Tooltip
        contentStyle={{
          borderRadius: 12,
          borderColor: "#e2e8f0",
        }}
        formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
      />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#0ea5e9"
        strokeWidth={3}
        dot={{ r: 3, strokeWidth: 2, fill: "#0ea5e9" }}
        activeDot={{ r: 5 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default memo(RevenueChart);
