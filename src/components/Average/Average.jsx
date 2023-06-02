import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip, Rectangle } from "recharts";
import { useState, useEffect } from "react";

const CustomLegend = () => {
  return (
    <h2 className="custom-legend">
      Durée moyenne
      <br />
      des sessions
    </h2>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

const CustomCursor = (props) => {
  const { points } = props;
  return (
    <Rectangle
      x={points[0].x}
      width={1000}
      height={256}
      fill="#e60000"
    />
  );
};

export default function Average({ userAverageSessions }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const result = [];
    userAverageSessions.sessions.forEach((key) => {
      result.push({ day: days[key.day - 1], sessionLength: key.sessionLength });
    });
    setData(result);
  }, [userAverageSessions]);

  return (
    <section className="average">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart
          data={data}
          width="100%"
          height="100%"
          margin={{ top: 80, right: 20, bottom: 60, left: 0 }}
        >
          <Legend content={<CustomLegend />}></Legend>
          <Tooltip
            cursor={<CustomCursor />}
            content={<CustomTooltip />}
          />
          <defs>
            <linearGradient
              id="as-gradient"
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              gradientTransform="rotate(0)"
            >
              <stop
                offset="0%"
                stopColor="#FFF"
                stopOpacity={0.4}
              />
              <stop
                offset="100%"
                stopColor="#FFF"
                stopOpacity={1}
              />
            </linearGradient>
          </defs>
          ;
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#FFFFFF", opacity: "0.6" }}
            tickMargin={30}
          ></XAxis>
          <YAxis
            axisLine={false}
            tickLine={false}
            width={20}
            tick={{ fill: "#FFFFFF", opacity: "0" }}
          ></YAxis>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#as-gradient)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
