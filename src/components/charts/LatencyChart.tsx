import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

import type { FeatureSnapshot } from "../../lib/queries/snapshots";

/* different metrics depending on data to be displayed */
type Props = {
  data: FeatureSnapshot[];
  metric: "p50_latency_s" | "p95_latency_s" | "p99_latency_s";
  title: string;
};

/* chart row type */
type ChartRow = {
  time: string;
} & Partial<Record<string, number>>;

/* constant color for service */
const SERVICE_COLORS: Record<string, string> = {
  go: "#10b981",
  node: "#3b82f6",
  python: "#f59e0b",
};

/* don´t create the colors at each render */
const services = Object.entries(SERVICE_COLORS);

export function LatencyChart({ data, metric, title }: Props) {
  const chartData = Object.values(
    /* grouping of data for better useage -> rebuilding object 
       row based grouping -> time based grouping */
    data.reduce(
      (acc, row) => {
        /* extract time*/
        const time = row.run_timestamp;

        /* if time does not exist create new entry  */
        if (!acc[time]) {
          acc[time] = { time } as ChartRow;
        }

        /* dynamic access of data */
        acc[time][row.service] = Number(row[metric]);

        return acc;
      },
      {} as Record<string, ChartRow>,
    ),
    /* sorting to gurantee order */
  ).sort((a, b) => Date.parse(a.time) - Date.parse(b.time));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h4>{title}</h4>
      {/* the container stays responsive */}
      <ResponsiveContainer width="100%" height="100%">
        {/* chartdata is turned into an actual chart */}
        <LineChart data={chartData}>
          {/* Backgroundlines -> only visual*/}
          <CartesianGrid strokeDasharray="4 4" />

          {/* X -> Datetime (format time) */}
          <XAxis
            dataKey="time"
            tickFormatter={(t) => new Date(t).toLocaleDateString()}
            minTickGap={30}
          />

          {/* Y -> Value (measured time)) */}
          <YAxis
            label={{ value: "Latency (s)", angle: -90, position: "insideLeft" }}
          />

          {/* hover-ecffects : format time */}
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
          />
          <Legend />

          {/* line-plots in loop */}
          {services.map(([service, color]) => (
            <Line
              key={service}
              type="monotone"
              dataKey={service}
              stroke={color}
              strokeWidth={3}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
