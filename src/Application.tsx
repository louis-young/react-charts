import { BarChart } from "./components/BarChart";

const series = [
  { label: "Apple", value: 10000, colour: "#003f5c" },
  { label: "Orange", value: 20000, colour: "#444e86" },
  { label: "Strawberry", value: 30000, colour: "#955196" },
  { label: "Grapefruit", value: 40000, colour: "#dd5182" },
];

export const Application = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <section style={{ maxWidth: "40rem" }}>
        <BarChart
          title="Global fruit consumption"
          xAxisTitle="Fruit"
          yAxisTitle="Amount"
          series={series}
          height={400}
        />
      </section>
    </main>
  );
};
