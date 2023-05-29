import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from "recharts";
import { useEffect, useState } from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length > 1) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}kcal`}</p>
      </div>
    );
  }

  return null;
};

export default function Daily(userActivity) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = [];
    let count = 0;
    userActivity.userActivity.forEach((key) => {
      count++;
      result.push({ name: count, poids: key.kilogram, calories: key.calories });
    });
    console.log(result);
    setData(result);
  }, [userActivity]);

  return (
    <section className="daily">
      <div className="text">
        <h2>Activité quotidienne</h2>
        <div>
          <div className="legend-b"></div>
          <span>Poids(kg)</span>
          <div className="legend-r"></div>
          <span>Calories brûlées(kcal)</span>
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height={250}
      >
        <BarChart
          data={data}
          width="100%"
          height="100%"
          margin={{ top: 20, right: 0, bottom: 0, left: 20 }}
          barGap={8}
          barSize={8}
        >
          <Tooltip
            offset={40}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            content={<CustomTooltip />}
          />
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <XAxis
            type="number"
            domain={["dataMin", "dataMax"]}
            dataKey="name"
            padding={{ left: 12, right: 12 }}
          />

          <YAxis
            orientation="right"
            interval={1}
          ></YAxis>
          <Bar
            dataKey="poids"
            fill="#000"
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
