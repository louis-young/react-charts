import { useState } from "react";
import { useBarChart } from "../../hooks/useBarChart";
import { Bar } from "../Bar";
import { Tooltip } from "../Tooltip";
import type { BarChartProps } from "./types";

export const BarChart = ({ series }: BarChartProps) => {
  const [selectedSeriesLabel, setSelectedSeriesLabel] = useState<
    string | undefined
  >();

  const { augmentedSeries, axisLabels, getBarChartProps } = useBarChart({
    series,
  });

  const [tooltip, setTooltip] = useState<string | undefined>(undefined);

  const handleTooltipChange = (newTooltip: string | undefined) => {
    setTooltip(newTooltip);
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-6 opacity-80 text-center">
        Fruit consumption in Britain
      </h2>

      {tooltip && <Tooltip tooltip={tooltip} />}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3rem 2rem 1fr",
          gridTemplateRows: "1fr 3rem 2rem",
        }}
      >
        <div
          style={{
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 1,
            gridColumnEnd: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            fontSize: "1.2rem",
            fontWeight: 500,
          }}
        >
          <h3 style={{ transform: "rotate(-90deg)" }}>Amount</h3>
        </div>

        <div
          style={{
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 2,
            gridColumnEnd: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {axisLabels.y.reverse().map((label) => {
            return (
              <h4
                key={label}
                style={{
                  textAlign: "center",
                  fontSize: ".9rem",
                  opacity: 0.8,
                }}
              >
                {label}
              </h4>
            );
          })}
        </div>

        {/* @ts-ignore */}
        <div {...getBarChartProps()}>
          {augmentedSeries.map((series) => (
            <Bar
              series={series}
              selectedSeriesLabel={selectedSeriesLabel}
              onSelectedSeriesLabelChange={setSelectedSeriesLabel}
              onTooltipChange={handleTooltipChange}
              key={series.value}
            />
          ))}
        </div>

        <div
          style={{
            gridRowStart: 2,
            gridRowEnd: 3,
            gridColumnStart: 3,
            gridColumnEnd: 4,
            display: "grid",
            gridTemplateColumns: `repeat(${series.length}, 1fr)`,
            columnGap: "1.5rem",
            alignItems: "center",
          }}
        >
          {axisLabels.x.map((label) => {
            return (
              <h4
                key={label}
                style={{ textAlign: "center", fontSize: ".9rem", opacity: 0.8 }}
              >
                {label}
              </h4>
            );
          })}
        </div>

        <div
          style={{
            gridRowStart: 3,
            gridRowEnd: 4,
            gridColumnStart: 3,
            gridColumnEnd: 4,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: 500,
          }}
        >
          <h3>Fruit</h3>
        </div>
      </div>
    </div>
  );
};
