import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { UseBarChartParameters } from "./types";

export const useBarChart = ({ series }: UseBarChartParameters) => {
  const highestSeriesValue = series.reduce((accumulator, { value }) => {
    return value > accumulator ? value : accumulator;
  }, 0);

  const xAxisLabels = series.map((series) => {
    return series.label;
  });

  const yAxisLabels = series.map((series) => {
    return series.value;
  });

  const augmentedSeries = series.map((augmentedSeries) => {
    return {
      ...augmentedSeries,
      getBarProps: <TElement extends unknown>({
        onClick,
        style,
        ...additionalBarProps
      }: DetailedHTMLProps<
        HTMLAttributes<TElement>,
        TElement
      > = {}): DetailedHTMLProps<HTMLAttributes<TElement>, TElement> => ({
        ...additionalBarProps,
        onClick: (event) => {
          // Demonstrating a prop getter function returning enriched/augmented functions.
          console.log(augmentedSeries.label);

          onClick && onClick(event);
        },
        style: {
          ...style,
          gridRowStart:
            Math.floor(highestSeriesValue - augmentedSeries.value) + 1, // Add one to account for the grid offset.
          gridRowEnd: highestSeriesValue + 1, // Add one to account for the grid offset.
          backgroundColor: augmentedSeries.colour,
          borderRadius: "0.1rem",
        },
      }),
    };
  });

  const seriesCount = series.length;

  const height = 500;

  const verticalGridCount = height / seriesCount;

  const getBarChartProps = () => {
    return {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${seriesCount}, 1fr)`,
        gridTemplateRows: `repeat(${highestSeriesValue}, 1fr)`,
        columnGap: "1.5rem",
        height: "500px",
        width: "100%",
        border: "0.05rem solid rgb(0 0 0 / 50%)",
        position: "relative",
        background: `repeating-linear-gradient(to right,
          transparent 0  calc(${verticalGridCount} - 1px),
          rgb(0 0 0 / 50%) calc(${verticalGridCount} - 1px) ${verticalGridCount}),
          
      repeating-linear-gradient(to bottom,
          transparent 0 calc(${verticalGridCount} - 1px),
          rgb(0 0 0 / 50%) calc(${verticalGridCount} - 1px) ${verticalGridCount})     
      transparent`,
      },
    };
  };

  return {
    augmentedSeries,
    xAxisLabels,
    yAxisLabels,
    highestSeriesValue,
    getBarChartProps,
  };
};
