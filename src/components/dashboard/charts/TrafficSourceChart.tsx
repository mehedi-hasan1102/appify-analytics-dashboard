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
import type { TrafficPoint } from "@/src/types/dashboard";

type TrafficSourceChartProps = {
  data: TrafficPoint[];
};

const TrafficSourceChart = ({ data }: TrafficSourceChartProps) => (
  <ResponsiveContainer width="100%" height={260}>
    <BarChart
      data={data}
      layout="vertical"
      margin={{ top: 5, right: 20, left: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
      <XAxis type="number" tickLine={false} axisLine={false} />
      <YAxis
        dataKey="source"
        type="category"
        tickLine={false}
        axisLine={false}
        width={80}
      />
      <Tooltip
        contentStyle={{
          borderRadius: 12,
          borderColor: "#e2e8f0",
        }}
      />
      <Bar
        dataKey="value"
        fill="#22c55e"
        radius={[6, 6, 6, 6]}
        isAnimationActive
      />
    </BarChart>
  </ResponsiveContainer>
);

export default memo(TrafficSourceChart);
