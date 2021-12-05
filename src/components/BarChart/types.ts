import type { Series } from "../../types";

export interface BarChartProps {
  title: string;
  xAxisTitle: string;
  yAxisTitle: string;
  series: Series;
  height: number;
}
