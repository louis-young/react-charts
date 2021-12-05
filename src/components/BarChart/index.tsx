import { useState } from "react";
import { useBarChart } from "../../hooks/useBarChart";
import { Bar } from "../Bar";
import { Tooltip } from "../Tooltip";
import { XAxis } from "../XAxis";
import { YAxis } from "../YAxis";
import type { BarChartProps } from "./types";

export const BarChart = ({
  title,
  xAxisTitle,
  yAxisTitle,
  series,
  height,
}: BarChartProps) => {
  const { augmentedSeries, xAxisLabels, yAxisLabels, getBarChartProps } =
    useBarChart({
      series,
      height,
    });

  const [tooltip, setTooltip] = useState<string | undefined>(undefined);

  const handleTooltipChange = (newTooltip: string | undefined) => {
    setTooltip(newTooltip);
  };

  return (
    <div style={{ position: "relative" }}>
      {tooltip && <Tooltip text={tooltip} />}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3rem 4rem 1fr",
          gridTemplateRows: "3rem 1fr 3rem 2rem",
        }}
      >
        <div
          style={{
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 3,
            gridColumnEnd: 4,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              opacity: 80,
            }}
          >
            {title}
          </h2>
        </div>
        <div
          style={{
            gridRowStart: 2,
            gridRowEnd: 3,
            gridColumnStart: 1,
            gridColumnEnd: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            fontSize: "1.2rem",
            fontWeight: 500,
          }}
        >
          <h3 style={{ transform: "rotate(-90deg)" }}>{yAxisTitle}</h3>
        </div>
        <YAxis labels={yAxisLabels} />
        <div style={{ gridColumnStart: 3, gridColumnEnd: 4 }}>
          <div {...getBarChartProps()}>
            {augmentedSeries.map((series) => (
              <Bar
                series={series}
                onTooltipChange={handleTooltipChange}
                key={series.value}
              />
            ))}
          </div>
        </div>

        <XAxis labels={xAxisLabels} seriesLength={series.length} />

        <div
          style={{
            gridRowStart: 4,
            gridRowEnd: 5,
            gridColumnStart: 3,
            gridColumnEnd: 4,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: 500,
          }}
        >
          <h3>{xAxisTitle}</h3>
        </div>
      </div>
    </div>
  );
};
