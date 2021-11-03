import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { UseBarChartParameters } from "./types";

export const useBarChart = ({ series }: UseBarChartParameters) => {
  const highestSeriesValue = series.reduce((accumulator, { value }) => {
    return value > accumulator ? value : accumulator;
  }, 0);

  // TODO: Fix shadowing.
  const augmentedSeries = series.map((augmentedSeries) => {
    return {
      ...augmentedSeries,
      getBarProps: (): DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      > => ({
        onClick: () => {
          // * Demonstrating a prop getter function returning enriched/augmented functions.
          console.log(augmentedSeries.value);
        },
        style: {
          gridRowStart:
            Math.floor(highestSeriesValue - augmentedSeries.value) + 1, // * Add one to account for the grid offset.
          gridRowEnd: highestSeriesValue + 1, // * Add one to account for the grid offset.
          backgroundColor: augmentedSeries.colour,
        },
      }),
    };
  });

  const seriesCount = series.length;

  const getBarChartProps = () => {
    return {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${seriesCount}, 1fr)`,
        gridTemplateRows: `repeat(${highestSeriesValue}, 1fr)`,
        columnGap: "1rem",
        height: "500px",
        width: "100%",
        border: "0.05rem solid rgb(0 0 0 / 7.5%)",
        position: "relative",
      },
    };
  };

  return {
    augmentedSeries,
    highestSeriesValue,
    getBarChartProps,
  };
};
