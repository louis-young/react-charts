import { useState } from "react";
import { useBarChart } from "../../hooks/useBarChart";
import { Bar } from "../Bar";
import { Tooltip } from "../Tooltip";
import type { BarChartProps } from "./types";

export const BarChart = ({ series }: BarChartProps) => {
  const { augmentedSeries, getBarChartProps } = useBarChart({
    series,
  });

  const [tooltip, setTooltip] = useState<string | undefined>(undefined);

  const handleTooltipChange = (newTooltip: string | undefined) => {
    setTooltip(newTooltip);
  };

  return (
    // @ts-ignore // TODO: Fix type issue.
    <div {...getBarChartProps()}>
      {tooltip && <Tooltip tooltip={tooltip} />}

      {/* TODO: Fix shadowing. */}

      {augmentedSeries.map((series) => (
        <Bar
          series={series}
          onTooltipChange={handleTooltipChange}
          key={series.value}
        />
      ))}
    </div>
  );
};
