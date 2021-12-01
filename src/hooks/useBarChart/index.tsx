import { DetailedHTMLProps, HTMLAttributes } from "react";
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

  const yAxisLabelCount = 10;

  const yAxisLabelStep = highestSeriesValue / yAxisLabelCount;

  const axisLabels = {
    x: series.map(({ label }) => label),
    y: [...Array(yAxisLabelCount + 1)]
      .map((item, index) => yAxisLabelStep * index)
      .reverse(), // Plus one to account for zero index and reverse for display.
  };

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
        position: "relative",
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
    axisLabels,
    highestSeriesValue,
    getBarChartProps,
  };
};
