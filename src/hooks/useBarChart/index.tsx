import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { callAllFunctions } from "../../utilities/callAllFunctions";
import type { UseBarChartParameters } from "./types";

export const useBarChart = ({ series, height }: UseBarChartParameters) => {
  const highestSeriesValue = series.reduce((accumulator, { value }) => {
    return value > accumulator ? value : accumulator;
  }, Number.MIN_SAFE_INTEGER);

  const augmentedSeries = series.map((augmentedSeries) => {
    return {
      ...augmentedSeries,
      getBarProps: <TElement extends unknown>({
        onClick,
        style,
        ...additionalBarProps
      }: DetailedHTMLProps<HTMLAttributes<TElement>, TElement> = {}) => ({
        ...additionalBarProps,
        onClick: callAllFunctions(() => {
          // Demonstrating a prop getter function returning enriched/augmented functions.
          // eslint-disable-next-line no-console
          console.log(augmentedSeries.label);
        }, onClick),
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

  const yAxisLabelCount = 10;

  const yAxisLabelStep = highestSeriesValue / yAxisLabelCount;

  const xAxisLabels = series.map(({ label }) => label);

  const yAxisLabels = [...Array(yAxisLabelCount + 1)]
    .map((item, index) => yAxisLabelStep * index)
    .reverse(); // Plus one to account for zero index and reverse for display.

  const seriesCount = series.length;

  const verticalGridCellCount = height / seriesCount;

  const getBarChartProps = () => {
    return {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${seriesCount}, 1fr)`,
        gridTemplateRows: `repeat(${highestSeriesValue}, 1fr)`,
        columnGap: "1.5rem",
        height,
        width: "100%",
        border: "0.05rem solid rgb(0 0 0 / 50%)",
        position: "relative" as const,
        background: `repeating-linear-gradient(to right,
          transparent 0  calc(${verticalGridCellCount}px - 1px),
          rgb(0 0 0 / 50%) calc(${verticalGridCellCount}px - 1px) ${verticalGridCellCount}px),
          
      repeating-linear-gradient(to bottom,
          transparent 0 calc(${verticalGridCellCount}px - 1px),
          rgb(0 0 0 / 50%) calc(${verticalGridCellCount}px - 1px) ${verticalGridCellCount}px)     
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
