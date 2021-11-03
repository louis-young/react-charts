import type { BarProps } from "./types";

export const Bar = ({ series, onTooltipChange }: BarProps) => {
  const { label, value, getBarProps } = series;

  const handleMouseEnter = () => {
    const newTooltip = `${label}: ${value}`;

    onTooltipChange(newTooltip);
  };

  const handleMouseLeave = () => {
    onTooltipChange(undefined);
  };

  return (
    <div
      {...getBarProps()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
