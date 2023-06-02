import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useState, useEffect } from "react";

export default function Score({ userMainData }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = [
      { name: "Group A", value: userMainData.todayScore },
      {
        name: "Group B",
        value: (() => {
          return 1 - userMainData.todayScore;
        })(),
      },
    ];
    setData(result);
  }, [userMainData]);

  return (
    <section className="score">
      <h2>Score</h2>
      <div className="layout">
        <p>
          <span>{userMainData.todayScore * 100}%</span>
          <br /> de votre
          <br />
          objectif
        </p>
        <div className="background"></div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart
          width={800}
          height={400}
        >
          <Pie
            data={data}
            startAngle={220}
            endAngle={-140}
            innerRadius={70}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
            cornerRadius={100}
          >
            <Cell
              key={`cell-0}`}
              fill="#e60000"
              stroke="none"
            />
            <Cell
              key={`cell-1}`}
              fill="#fbfbfb"
              stroke="none"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
}
