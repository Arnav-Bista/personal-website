import { CartesianAxis, CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from "recharts";


interface TspChartProps {
  cities: Array<[number, number]>,
  path?: Array<[number, number]>,
}

export default function TspChart(props: TspChartProps) {
  return (
    <ScatterChart
    width={600}
    height={600}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" />
      <YAxis type="number" dataKey="y" />
      <Scatter
        data={
          props.cities.map(
            ([x, y]) => { return { x: x, y: y } })
        }
      />

    </ScatterChart>
  );
}
