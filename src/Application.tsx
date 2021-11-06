import { BarChart } from "./components/BarChart";

const series = [
  { label: "Apple", value: 10, colour: "#003f5c" },
  { label: "Orange", value: 40, colour: "#444e86" },
  { label: "Strawberry", value: 200, colour: "#955196" },
  { label: "Grapefruit", value: 400, colour: "#dd5182" },
  { label: "Lemon", value: 120, colour: "#ff6e54" },
  { label: "Grape", value: 300, colour: "#ffa600" },
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
