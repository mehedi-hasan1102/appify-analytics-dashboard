"use client";

import { memo } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { UserSlice } from "@/src/types/dashboard";

type UserDistributionChartProps = {
  data: UserSlice[];
};

const COLORS = ["#0ea5e9", "#22c55e", "#f59e0b"];

const UserDistributionChart = ({ data }: UserDistributionChartProps) => (
  <ResponsiveContainer width="100%" height={260}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={90}
        innerRadius={55}
        paddingAngle={4}
      >
        {data.map((entry, index) => (
          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          borderRadius: 12,
          borderColor: "#e2e8f0",
        }}
      />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  </ResponsiveContainer>
);

export default memo(UserDistributionChart);
