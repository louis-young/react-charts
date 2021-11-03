import type { Series } from "../../types";

export interface AugmentedSeriesProps {
  getBarProps: () => unknown;
}

export interface BarProps {
  series: Series[number] & AugmentedSeriesProps; // TODO: Separate single series type.
  onTooltipChange: (newTooltip: string | undefined) => void;
}
