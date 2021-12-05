import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { Series } from "../../types";

export interface AugmentedSeriesProps<TElement> {
  getBarProps: (
    additionalBarProps?: DetailedHTMLProps<HTMLAttributes<TElement>, TElement>,
  ) => DetailedHTMLProps<HTMLAttributes<TElement>, TElement>;
}

export interface BarProps<TElement> {
  series: Series[number] & AugmentedSeriesProps<TElement>;
  onTooltipChange: (newTooltip: string | undefined) => void;
}
