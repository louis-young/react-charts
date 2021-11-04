import { BarChart } from "./components/BarChart";

const series = [
  { label: "Apple", value: 1, colour: "#003f5c" },
  { label: "Orange", value: 2, colour: "#444e86" },
  { label: "Strawberry", value: 3, colour: "#955196" },
  { label: "Grapefruit", value: 4, colour: "#dd5182" },
  { label: "Lemon", value: 5, colour: "#ff6e54" },
  { label: "Grape", value: 6, colour: "#ffa600" },
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
