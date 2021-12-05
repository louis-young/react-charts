import { BarChart } from "./components/BarChart";

const series = [
  { label: "Apple", value: 100, colour: "#003f5c" },
  { label: "Orange", value: 200, colour: "#444e86" },
  { label: "Strawberry", value: 300, colour: "#955196" },
  { label: "Grapefruit", value: 400, colour: "#dd5182" },
];

export const Application = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <section style={{ maxWidth: "30rem" }}>
        <BarChart
          title="Global fruit consumption"
          xAxisTitle="Fruit"
          yAxisTitle="Amount"
          series={series}
          height={300}
        />
      </section>
    </main>
  );
};
