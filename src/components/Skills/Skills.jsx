import { RadarChart, Radar, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { useState, useEffect } from "react";

const getKind = (arg) => {
  let kind = arg;
  switch (kind) {
    case 1:
      kind = "Cardio";
      break;
    case 2:
      kind = "Énergie";
      break;
    case 3:
      kind = "Endurance";
      break;
    case 4:
      kind = "Force";
      break;
    case 5:
      kind = "Vitesse";
      break;
    case 6:
      kind = "Intensité";
      break;
    default:
      kind = "NC";
  }
  return kind;
};

export default function Skills({ userPerformance }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = [];
    userPerformance.data.forEach((key) => {
      result.push({ kind: getKind(key.kind), value: key.value });
      result.unshift(result.pop());
    });
    setData(result);
  }, [userPerformance]);

  return (
    <section className="skills">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadarChart
          className="radar"
          width="100%"
          height="100%"
          data={data}
          strokeWidth={1.6}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white", fontSize: 16, fontFamily: "roboto", fontWeight: 500 }}
          />
          <PolarRadiusAxis
            angle={60}
            tick={false}
            // domain={["dataMin", "dataMax"]}
            tickLine={false}
            axisLine={false}
          />
          <Radar
            name="user"
            dataKey="value"
            stroke="rgba(255,1,1,0)"
            fill="rgba(255,1,1,0.7)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
