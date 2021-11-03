import { BarChart } from "./components/BarChart";

const series = [
  { label: "Apple", value: 1, colour: "green" },
  { label: "Orange", value: 2, colour: "orange" },
  { label: "Strawberry", value: 3, colour: "red" },
  { label: "Grapefruit", value: 4, colour: "pink" },
  { label: "Lemon", value: 5, colour: "yellow" },
  { label: "Grape", value: 6, colour: "purple" },
];

export const Application = () => {
  return (
    <main className="p-12">
      <section className="max-w-3xl">
        <BarChart series={series} />
      </section>
    </main>
  );
};
