import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [totals, setTotals] = useState([]);
  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const totalsLoaded = data.data.data;
      // console.log(totalsLoaded);
      const totalData = totalsLoaded.map((total) => {
        const totalSingle = {
          name: total.name,
          total: total.total,
          logo: total.logo,
        };
        return totalSingle;
      });
      // console.log(totalData);
      setTotals(totalData);
    });
  }, []);
  return (
    <div className="background-stat h-screen">
      <h1 className="text-center text-5xl font-bold text-white">Statistical Data</h1>
      <ResponsiveContainer>
        <AreaChart
          data={totals}
          margin={{
            top: 100,
            right: 100,
            left: 50,
            bottom: 200,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Area
            name="Graph of Total number of Question per Topic"
            type="monotone"
            dataKey="total"
            stroke="gray"
            fill="lightgreen"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
