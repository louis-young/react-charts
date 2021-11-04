# Charter

A flexible, composable data visualisation library.

![# Charter](documentation/charter.png)

## Overview

### The problem

You want to display a chart in your application, but you want to have full control over the markup. styling and functionality.

### The solution

The library exposes a hook for each type of chart. You then consume this hook in your application and compose your own graph using the information supplied by the hook.

## Charts

### Bar Chart

![# Bar Chart](documentation/bar-chart.png)

- `useBarChart`

```tsx
const series = [
  { label: "Apple", value: 1, colour: "#003f5c" },
  { label: "Orange", value: 2, colour: "#444e86" },
  { label: "Strawberry", value: 3, colour: "#955196" },
  { label: "Grapefruit", value: 4, colour: "#dd5182" },
  { label: "Lemon", value: 5, colour: "#ff6e54" },
  { label: "Grape", value: 6, colour: "#ffa600" },
];

const { augmentedSeries, xAxisLabels, yAxisLabels, getBarChartProps } =
  useBarChart({
    series,
  });
```

#### Options

- `series: { label: string; value: number; colour: string; }[]` - The series of chart data.
  - `label` - The label of the bar on the chart.
  - `value` - The value of the bar on the chart.
  - `colour` - The colour of the bar on the chart.

#### Returns

- `augmentedSeries` - An augmented/enriched version of the series data with additional properties used to compose the chart.

  ```
  {
    getBarProps: <TElement extends unknown>({ onClick, style, ...additionalBarProps }?: DetailedHTMLProps<HTMLAttributes<TElement>, TElement>) => DetailedHTMLProps<HTMLAttributes<TElement>, TElement>;
    label: string;
    value: number;
    colour: string;
  }[]
  ```

  - `getBarProps` - A function that returns the necessary collection of properties for the bar on the chart.
  - `label` - The label of the bar on the chart.
  - `value` - The value of the bar on the chart.
  - `colour` - The colour of the bar on the chart.

- `xAxisLabels` - An array of x axis labels.
- `yAxisLabels` - An array of y axis labels.
- `getBarChartProps` - A function that returns the necessary collection of properties for the parent chart element.

#### Examples

```tsx
const series = [
  { label: "Apple", value: 1, colour: "#003f5c" },
  { label: "Orange", value: 2, colour: "#444e86" },
  { label: "Strawberry", value: 3, colour: "#955196" },
  { label: "Grapefruit", value: 4, colour: "#dd5182" },
  { label: "Lemon", value: 5, colour: "#ff6e54" },
  { label: "Grape", value: 6, colour: "#ffa600" },
];

const BarChart = () => {
  const { augmentedSeries, getBarChartProps } = useBarChart({
    series,
  });

  return (
    <div {...getBarChartProps()}>
      {augmentedSeries.map(({ getBarProps }) => (
        <div {...getBarProps()} />
      ))}
    </div>
  );
};
```
